class ModelTopTeachers {
  constructor(store) {
    this.store = store
  }

  changeTeacherFavoriteStatus({ teacherId }) {
    this.store.hooksStore.emit('teacherFavoriteStatusChanged', null, { teacherId })
  }

  async getTeacherById({ teacherId }) {
    const teacher = await this.store.getTeacherById({ teacherId })
    // const teacher = teachers.find(teacher => teacher.id === teacherId)
    return teacher
  }

  async getTeachers(filters) {
    if (!filters) { return await this.store.getTeachers() }
    else {
      const filteredTeachers = await this.getFilteredTeachers(filters)
      return filteredTeachers
    }
  }

  async getFilteredTeachers(filters) {
    const teachers = await this.store.getTeachers()
    const filteredTeachers = teachers.filter(teacher => this.checkTeacher(teacher, filters))

    return filteredTeachers
  }

  checkTeacher(teacher, filters) {
    let isteacherMached = true
    Object.keys(filters).forEach((key) => {
      switch (key) {
        case 'age':{
          const interval = filters[key].split('-')
          if (teacher[key] < interval[0] || teacher[key] > interval[1])
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
    })
    return isteacherMached
  }
}

export { ModelTopTeachers }
