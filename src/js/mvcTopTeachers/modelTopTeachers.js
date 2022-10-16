
class ModelTopTeachers {
  constructor(store) {
    this.store = store
    this.teachers = store.getTeachers()
  }

  changeTeacherFavoriteStatus({ teacherId }) {
    this.store.hooksStore.emit('teacherFavoriteStatusChanged', null, { teacherId })
    // teacher = this.teachers.find(teacher => teacher.id === id)
  }

  getTeacherById({ teacherId }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const teacher = this.teachers.find(teacher => teacher.id === teacherId)
        resolve(teacher)
      }, 630)
    })
  }

  getTeachers(filters) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (!filters) {
          resolve(this.teachers)
        }
        else {
          const filteredTeachers = this.getFilteredTeachers(filters)
          resolve(filteredTeachers)
        }
      }, 530)
    },

    )
  }

  getFilteredTeachers(filters) {
    const filteredTeachers = this.teachers.filter((teacher) => {
      return this.checkTeacher(teacher, filters)
    })
    return filteredTeachers
  }

  checkTeacher(teacher, filters) {
    let isteacherMached = true
    Object.keys(filters).forEach((key) => {
      switch (key) {
        case 'age':{
          const interval = filters[key].split('-')
          if (teacher.age < interval[0] || teacher.age > interval[1])
            isteacherMached = false
          break }

        case 'country':
          if (filters[key] !== teacher.country)
            isteacherMached = false
          break

        case 'sex':
          if (filters[key] !== teacher.gender)
            isteacherMached = false
          break

        case 'withPhoto':
          if (!teacher.picture)
            isteacherMached = false
          break
        case 'favorite':
          if (!teacher.favorite)
            isteacherMached = false
          break
      }

      // doesn't have favorites yet
    })
    return isteacherMached
  }
}

export { ModelTopTeachers }
