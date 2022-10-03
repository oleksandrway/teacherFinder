
class Controller {
  constructor({ view, model, handleError }) {
    this.view = view
    this.model = model
    this.handleError = handleError
    this.filters = {}

    this.view.hooks.on('filterChanged', ({ filterName, filterValue }) => {
      console.log(filterName, filterValue)
      this.filters[filterName] = filterValue
      console.log(this.filters)
    })

    this.renderStoredTeachers()
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
