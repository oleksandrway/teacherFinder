
class ControllerTopTeachers {
  constructor({ view, model, handleError }) {
    this.view = view
    this.model = model
    this.handleError = handleError
    this.filters = {}

    this.renderStoredTeachers()

    this.view.hooksTopTeachers.on('filterChanged', ({ filterName, filterValue }) => {
      this.filterTeachers({ filterName, filterValue })
    })

    this.view.hooksTopTeachers.on('teacherSelected', ({ teacherId }) => {
      this.openTeacherInfoModal({ teacherId })
    })
    this.view.hooksTopTeachers.on('favoriteIconClicked', ({ teacherId }) => {
      this.toggleTeacherFavoriteStatus({ teacherId })
    })

    this.view.hooksTopTeachers.on('clearFavorites', () => {
      this.model.clearFavorites()
    })

    this.view.hooksTopTeachers.on('deleteItem', ({ teacherId }) => {
      this.model.deleteItem({ teacherId })
    })

    this.model.store.hooksStore.on('favoritesChanged', () => {
      this.renderFilteredTeachers(this.filters)
    })
    this.model.store.hooksStore.on('teachersChanged', () => {
      this.renderFilteredTeachers(this.filters)
    })
    this.model.store.hooksStore.on('teacherDeleted', () => {
      this.renderFilteredTeachers(this.filters)
      this.view.hideTeacherInfoModal()
    })
  }

  filterTeachers({ filterName, filterValue }) {
    if (!filterValue)
      delete this.filters[filterName]
    else
      this.filters[filterName] = filterValue

    this.renderFilteredTeachers(this.filters)
  }

  async toggleTeacherFavoriteStatus({ teacherId }) {
    try {
      await this.model.toggleTeacherFavoriteStatus({ teacherId })
    }
    catch (error) {
      this.handleError(error)
    }
  }

  async openTeacherInfoModal({ teacherId }) {
    try {
      const teacher = await this.model.getTeacherById({ teacherId })
      if (teacher)
        this.view.renderTeacherInfoModal(teacher)
    }
    catch (error) {
      this.handleError(error)
    }
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

export { ControllerTopTeachers }
