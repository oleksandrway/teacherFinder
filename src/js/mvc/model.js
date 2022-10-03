import { users } from '@/js/data/users-data.js'

class Model {
  constructor() {
    this.teachers = users
  }

  getTeachers() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.teachers)
      }, 530)
    },

    )
  }
}

export { Model }
