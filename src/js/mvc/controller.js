
class Controller {
  constructor({ view, model, handleError }) {
    this.view = view
    this.model = model
    this.handleError = handleError
    this.filters = {}

    this.view.hooks.on('filterChanged', ({ filterName, filterValue }) => {
      if (!filterValue)
        delete this.filters[filterName]
      else
        this.filters[filterName] = filterValue

      console.log(this.filters)
      this.renderFilteredTeachers(this.filters)
    })

    this.view.hooks.on('newTeacherAdded', (newTeacher) => {
      console.log('newTeacher', newTeacher)
    })

    this.renderStoredTeachers()
  }

  async renderFilteredTeachers() {
    this.view.showTeachersLoader()

    try {
      const teachers = await this.model.getTeachers(this.filters)
      if (teachers)
        this.view.renderTeachersList(teachers)
    }
    catch (error) {
      this.handleError(error)
    }
    finally {
      this.view.hideTeachersLoader()
    }
  }

  async renderStoredTeachers() {
    this.view.showTeachersLoader()

    try {
      const teachers = await this.model.getTeachers()
      if (teachers)
        this.view.renderTeachersList(teachers)
    }
    catch (error) {
      this.handleError(error)
    }
    finally {
      this.view.hideTeachersLoader()
    }
  }
}

export { Controller }
