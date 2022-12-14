
import EventBus from 'js-event-bus'
import { calculateAge } from '../helpers/calculateAge'
import { handleError } from '@/js/helpers/handleError.js'

class Store {
  constructor(adapter) {
    this.adapter = adapter
    this.hooksStore = new EventBus()
    this.teachers = null
  }

  async clearFavorites() {
    try {
      await this.adapter.clearFavorites()
      this.teachers = await this.getNewTeachers()

      this.hooksStore.emit('favoritesChanged')
    }
    catch (error) {
      handleError(error)
    }
  }

  async deleteItem({ teacherId }) {
    await this.adapter.deleteItem({ teacherId })
    this.teachers = await this.getNewTeachers()
    this.hooksStore.emit('teacherDeleted')
  }

  async toggleTeacherFavoriteStatus({ teacherId }) {
    await this.adapter.toggleTeacherFavoriteStatus({ teacherId })
    this.teachers = await this.getNewTeachers()

    this.hooksStore.emit('favoritesChanged')
  }

  async addTeacher({ teacherInfo }) {
    await this.adapter.addTeacher({ teacherInfo })
    this.teachers = await this.getNewTeachers()

    this.hooksStore.emit('teachersChanged')
  }

  async getTeachers() {
    if (this.teachers)
      return this.teachers

    else
      return this.getNewTeachers()
  }

  async getNewTeachers() {
    try {
      let teachers = await this.adapter.getTeachers()

      teachers = teachers.map((teacher) => {
        return {
          ...teacher,
          age: calculateAge(teacher.b_date),
        }
      })

      this.teachers = teachers
      return teachers
    }
    catch (error) {
      handleError(error)
    }
  }

  async getTeacherById({ teacherId }) {
    const teachers = await this.getTeachers()
    const teacher = teachers.find(teacher => teacher.id === teacherId)
    return teacher
  }

  async getFavoriteTeachers() {
    const teachers = await this.getTeachers()
    const favoriteTeachers = teachers.filter(teacher => teacher.favorite)
    return favoriteTeachers
  }
}

export { Store }
