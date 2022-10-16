import EventBus from 'js-event-bus'
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
    for (let i = 0; i < this.teachers.length; i++)
      this.teachers[i].favorite = false
    this.hooksStore.emit('teachersChanged')
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
    return this.teachers
  }
}

const formattedUsers = formatUsers(users)
const store = new Store(formattedUsers)
const hooksStore = store.hooksStore
export { store, hooksStore }
