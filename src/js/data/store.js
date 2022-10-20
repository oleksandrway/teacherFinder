import EventBus from 'js-event-bus'
import { calculateAge } from '../helpers/calculateAge'
import { adapter } from '@/js/data/localStorageDataAdapter.js'

const delay = ms => new Promise(resolve => setTimeout(() => resolve(), ms))

class Store {
  constructor(adapter) {
    this.adapter = adapter
    this.hooksStore = new EventBus()

    this.hooksStore.on('clearFavorite', () => {
      this.clearFavorites()
    })

    this.hooksStore.on('teacherAdded', ({ teacherInfo }) => {
      this.addTeacher({ teacherInfo })
    })

    this.hooksStore.on('teacherFavoriteStatusChanged', ({ teacherId }) => {
      this.changeTeacherFavoriteStatus({ teacherId })
    })
  }

  clearFavorites() {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.teachers = this.teachers.map((teacher) => {
          return {
            ...teacher,
            favorite: false,
          }
        })
        this.hooksStore.emit('teachersChanged')

        resolve('done')
      }, 330)
    })
  }

  changeTeacherFavoriteStatus({ teacherId }) {
    const teacher = this.teachers.find(teacher => teacher.id === teacherId)
    teacher.favorite = !teacher.favorite
    this.hooksStore.emit('teachersChanged')
  }

  addTeacher({ teacherInfo }) {
    const teacher = teacherInfo
    teacher.id = this.teachers.length
    this.teachers.push(teacherInfo)
    this.hooksStore.emit('teachersChanged')
  }

  async getTeachers() {
    // await delay(500)

    if (this.teachers) {
      return this.teachers
    }
    else {
      console.log('teachers from ')
      const teachers = JSON.parse(JSON.stringify(await adapter.getTeachers())) // to make a copy of the array and add age property to teachers I pass not stored ones
      for (let i = 0; i < teachers.length; i++)
        teachers[i].age = calculateAge(teachers[i].b_date)

      this.teachers = teachers
      return teachers
    }
  }

  async getTeacherById({ teacherId }) {
    const teahcers = await this.getTeachers()
    const teacher = teahcers.find(teacher => teacher.id === teacherId)
    return teacher
  }

  async getFavoriteTeachers() {
    const teachers = await this.getTeachers()
    const favoriteTeachers = teachers.filter(teacher => teacher.favorite)
    return favoriteTeachers
  }
}

const store = new Store(adapter)
const hooksStore = store.hooksStore
export { store, hooksStore }
