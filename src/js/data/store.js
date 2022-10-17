import EventBus from 'js-event-bus'
import { calculateAge } from '../helpers/calculateAge'
import { users } from '@/js/data/users-data.js'
import { formatUsers } from '@/js/helpers/formatUsers'

class Store {
  constructor(teachers) {
    this.teachers = teachers
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
        for (let i = 0; i < this.teachers.length; i++)
          this.teachers[i].favorite = false
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

  getTeachers() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const teachers = JSON.parse(JSON.stringify(this.teachers)) // to make a copy of the array and add age property to teachers I pass not stored ones
        for (let i = 0; i < teachers.length; i++)
          teachers[i].age = calculateAge(teachers[i].b_date)

        resolve(teachers)
        // resolve(this.teachers)
      }, 630)
    })
  }

  async getTeacherById({ teacherId }) {
    const teahcers = await this.getTeachers()
    const teacher = teahcers.find(teacher => teacher.id === teacherId)
    return teacher
  }

  getFavoriteTeachers() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.teachers.filter(teacher => teacher.favorite))
      }, 630)
    })
  }
}

const formattedUsers = formatUsers(users)
const store = new Store(formattedUsers)
const hooksStore = store.hooksStore
export { store, hooksStore }
