import { hooksStore } from '@/js/data/store.js'

class ControllerTopTeachers {
  constructor({ view, model, handleError }) {
    this.view = view
    this.model = model
    this.handleError = handleError
    this.filters = {}

    this.renderStoredTeachers()

    this.view.hooksTopTeachers.on('filterChanged', ({ filterName, filterValue }) => {
      if (!filterValue)
        delete this.filters[filterName]
      else
        this.filters[filterName] = filterValue

      this.renderFilteredTeachers(this.filters)
    })

    this.view.hooksTopTeachers.on('teacherSelected', ({ teacherId }) => {
      this.openTeacherInfoModal({ teacherId })
    })
    this.view.hooksTopTeachers.on('favoriteIconClicked', ({ teacherId }) => {
      this.changeTeacherFavoriteStatus({ teacherId })
    })

    this.view.hooksTopTeachers.on('clearFavorite', () => {
      hooksStore.emit('clearFavorite')
    })
    hooksStore.on('teachersChanged', () => {
      this.renderFilteredTeachers(this.filters)
    })
  }

  async changeTeacherFavoriteStatus({ teacherId }) {
    try {
      await this.model.changeTeacherFavoriteStatus({ teacherId })
    }
    catch (error) {
      this.handleError(error)
    }
  }

  async openTeacherInfoModal({ teacherId }) {
    try {
      this.view.showWindowLoader()
      const teacher = await this.model.getTeacherById({ teacherId })
      if (teacher)
        this.view.renderTeacherInfoModal(teacher)
    }
    catch (error) {
      this.handleError(error)
    }
    finally {
      this.view.hideWindowLoader()
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
