class ModelTopTeachers {
  constructor(store) {
    this.store = store
  }

  toggleTeacherFavoriteStatus({ teacherId }) {
    this.store.toggleTeacherFavoriteStatus({ teacherId })
  }

  async getTeacherById({ teacherId }) {
    const teacher = await this.store.getTeacherById({ teacherId })
    return teacher
  }

  async deleteItem({ teacherId }) {
    this.store.deleteItem({ teacherId })
  }

  async clearFavorites() {
    this.store.clearFavorites()
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
    let isTeacherMatched = true
    Object.keys(filters).forEach((key) => {
      switch (key) {
        case 'search': {
          const fullName = `${teacher.name.first}  ${teacher.name.last}`.toLowerCase().split(' ').join('')
          const wantedString = filters[key].toLowerCase().split(' ').join('')
          isTeacherMatched = fullName.includes(wantedString)
          break }
        case 'age':{
          const interval = filters[key].split('-')
          if (teacher[key] < interval[0] || teacher[key] > interval[1])
            isTeacherMatched = false
          break }

        case 'country':
          if (filters[key] !== teacher.country)
            isTeacherMatched = false
          break

        case 'sex':
          if (filters[key] !== teacher.gender)
            isTeacherMatched = false
          break

        case 'withPhoto':
          if (!teacher.picture)
            isTeacherMatched = false
          break
        case 'favorite':
          if (!teacher.favorite)
            isTeacherMatched = false
          break
      }
    })
    return isTeacherMatched
  }
}

export { ModelTopTeachers }
