import { users } from '@/js/data/users-data.js'
import { formatUsers } from '@/js/helpers/formatUsers'

const formattedUsers = formatUsers(users)

const delay = ms => new Promise(resolve => setTimeout(() => resolve(), ms))

const adapter = {
  store: localStorage,
  keyInStorage: 'Teachers',

  async clearFavorites() {
    await delay(700)

    const storedTeachers = JSON.parse(this.store.getItem(this.keyInStorage))
    for (let i = 0; i < storedTeachers.length; i++)
      storedTeachers[i].favorite = false

    this.store.setItem(this.keyInStorage, JSON.stringify(storedTeachers))
    return storedTeachers
  },

  async toggleTeacherFavoriteStatus({ teacherId }) {
    await delay(700)

    const storedTeachers = JSON.parse(this.store.getItem(this.keyInStorage))

    for (let i = 0; i < storedTeachers.length; i++) {
      if (storedTeachers[i].id === teacherId)
        storedTeachers[i].favorite = !storedTeachers[i].favorite
    }

    this.store.setItem(this.keyInStorage, JSON.stringify(storedTeachers))
    return storedTeachers
  },

  async deleteItem({ teacherId }) {
    const storedTeachers = JSON.parse(this.store.getItem(this.keyInStorage))
    const teachers = storedTeachers.filter((teacher) => {
      return teacher.id !== teacherId
    })
    this.store.setItem(this.keyInStorage, JSON.stringify(teachers))
    await delay(700)
    return teachers
  },

  async  addTeacher({ teacherInfo }) {
    await delay(700)

    const storedTeachers = JSON.parse(this.store.getItem(this.keyInStorage))
    const teacher = {
      ...teacherInfo,
      id: storedTeachers[storedTeachers.length - 1].id + 1,
    }

    const teachers = [
      ...storedTeachers,
      teacher,
    ]

    this.store.setItem(this.keyInStorage, JSON.stringify(teachers))
    return teachers
  },

  async getTeachers() {
    await delay(700)

    const storedTeachers = JSON.parse(this.store.getItem(this.keyInStorage))
    if (storedTeachers) {
      return storedTeachers
    }
    else { // if there are no teachers in storage
      const teachers = formattedUsers
      this.store.setItem(this.keyInStorage, JSON.stringify(teachers))
      return teachers
    }
  },

}

export { adapter }
