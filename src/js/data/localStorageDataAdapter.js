import { users } from '@/js/data/users-data.js'
import { formatUsers } from '@/js/helpers/formatUsers'

const formattedUsers = formatUsers(users)

const delay = ms => new Promise(resolve => setTimeout(() => resolve(), ms))

const adapter = {
  store: localStorage,
  keyInStorage: 'Teachers',

  clearFavorites() {
    return new Promise((resolve) => {
      setTimeout(() => {
        // for (let i = 0; i < this.teachers.length; i++)
        //   this.teachers[i].favorite = false
        this.teachers = this.teachers.map((teacher) => {
          return {
            ...teacher,
            favorite: false,
          }
        })

        resolve('done')
      }, 330)
    })
  },

  changeTeacherFavoriteStatus({ teacherId }) {
    const teacher = this.teachers.find(teacher => teacher.id === teacherId)
    teacher.favorite = !teacher.favorite
  },

  addTeacher({ teacherInfo }) {
    const teacher = teacherInfo
    teacher.id = this.teachers.length
    this.teachers.push(teacherInfo)
  },

  async getTeachers() {
    await delay(500)

    const StoredTeachers = JSON.parse(this.store.getItem(this.keyInStorage))
    if (StoredTeachers) {
      return StoredTeachers
    }
    else { // if there are no teachers in storage
      const teachers = formattedUsers
      this.store.setItem(this.keyInStorage, JSON.stringify(teachers))
      return teachers
    }
  },

  async getTeacherById({ teacherId }) {
    const teachers = await this.getTeachers()
    const teacher = teachers.find(teacher => teacher.id === teacherId)
    return teacher
  },

}

export { adapter }
