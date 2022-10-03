
class Model {
  constructor(teachers) {
    this.teachers = teachers
  }

  getTeachers(filters) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (!filters) {
          resolve(this.teachers)
        }
        else {
          const filteredTeachers = this.filterTeachers(filters)
          resolve(filteredTeachers)
        }
      }, 530)
    },

    )
  }

  filterTeachers(filters) {
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
          if (teacher.dob.age < interval[0] || teacher.dob.age > interval[1])
            isteacherMached = false
          break }

        case 'country':
          if (filters[key] !== teacher.location.country)
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
      }

      // doesn't have favorites yet
    })
    return isteacherMached
  }
}

export { Model }
