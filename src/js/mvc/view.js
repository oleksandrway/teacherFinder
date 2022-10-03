import EventBus from 'js-event-bus'
import { createELement } from '@/js/helpers/createElement'

class View {
  constructor({ teachersContainer, teachersListSelector, filtersInputselectors }) {
    this.teachersContainer = document.querySelector(teachersContainer)
    this.teachersList = document.querySelector(teachersListSelector)
    this.hooks = new EventBus()
    // this.filterForm = document.querySelector(filterFormSelector)

    this.filtersInputs = filtersInputselectors.map(selector => document.querySelector(selector))

    this.addFilterListeners(this.filtersInputs)
  }

  addFilterListeners(filtersInputs) {
    filtersInputs.forEach((filter) => {
      if (filter.type === 'checkbox') {
        filter.addEventListener('change', () => {
          this.hooks.emit('filterChanged', null, { filterName: filter.name, filterValue: filter.checked })
        })
      }
      else {
        filter.addEventListener('change', () => {
          this.hooks.emit('filterChanged', null, { filterName: filter.name, filterValue: filter.value })
        })
      }
    })
  }
  // formInit(form ) {

  // }

  renderTeachersList(teachers) {
    this.teachersList.innerHTML = ''
    teachers.forEach(teacher => this.renderTeacherItem(teacher))
  }

  renderTeacherItem(teacher) {
    const teacherItem = createELement('li', {
      classList: 'teacher-item teachers-list__item',
    })

    teacherItem.innerHTML = `
        <img class="teacher-item__img" src="${teacher.picture.large}" alt=" teacher: ${teacher.name.first}  ${teacher.name.last}">

        <div class="teacher-item__name">${teacher.name.first} <br>  ${teacher.name.last} </div>
      <div class="teacher-item__job">${teacher.course}</div>
      <div class="teacher-item__location">${teacher.location.country}</div>


    `

    this.teachersList.appendChild(teacherItem)
  }

  showTeachersLoader() {
    this.teachersList.style.display = 'none'
    const loaderContainer = createELement('div', {
      classList: 'teachers-loader',
    })

    const loader = createELement('img', {
      src: '/spinnerBlack.svg',
      classList: 'teachers-loader__img',
    })

    loaderContainer.appendChild(loader)
    this.teachersList.insertAdjacentElement('beforeBegin', loaderContainer)
  }

  hideTeachersLoader() {
    const loader = this.teachersContainer.querySelector('.teachers-loader')
    loader.remove()
    this.teachersList.style = ''
  }
}

export { View }
