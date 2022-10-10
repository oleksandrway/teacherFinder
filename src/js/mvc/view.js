import EventBus from 'js-event-bus'
import { createELement } from '@/js/helpers/createElement'
import { createModal } from '@/defaultModal/defaultModal.js'

// // validation

import '@/validation/style.scss'
import { fields, fieldsValidationRules } from '@/validation/data/post-form'
import { addFormValidation } from '@/validation/formHelpers/addFormValidation'

// validation

function logData(data) {
  console.log('data:', data)
}
const form = document.querySelector('.add-teacher')
addFormValidation(form, fields, fieldsValidationRules, logData)

createModal({ openBtnSelector: '.open-modal-btn', preContentSelector: '.modal-add-teacher' })
class View {
  constructor({ teachersContainer, teachersListSelector, filtersInputSelectors, newTeacherFormSelector }) {
    this.teachersContainer = document.querySelector(teachersContainer)
    this.teachersList = document.querySelector(teachersListSelector)
    this.hooks = new EventBus()

    this.newTeacherForm = document.querySelector(newTeacherFormSelector)

    this.filtersInputs = filtersInputSelectors.map(selector => document.querySelector(selector))

    this.addFilterListeners(this.filtersInputs)

    this.formInit(this.newTeacherForm)
    // this.newTeacherForm.requestSubmit()
  }

  formInit(form) {
    form.addEventListener('submit', (e) => {
      // e.preventDefault()
      const newTeacher = {}
      // const formData = new FormData(form)

      // const taskName = form.querySelector('[name="task"]').value
      // if (taskName) {
      //   this.hooks.emit('task-add', null, {
      //     name: taskName,

      //   })
      //   form.reset()
      // }
      this.hooks.emit('newTeacherAdded', null, {

      })

      // form.reset()
    })
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

  renderTeachersList(teachers) {
    this.teachersList.innerHTML = ''
    teachers.forEach(teacher => this.renderTeacherItem(teacher))
  }

  renderTeacherItem(teacher) {
    const teacherItem = createELement('li', {
      classList: 'teacher-item teachers-list__item',
    })

    teacherItem.innerHTML = `
        <img class="teacher-item__img" src="${teacher.picture}" alt=" teacher: ${teacher.name.first}  ${teacher.name.last}">

        <div class="teacher-item__name">${teacher.name.first} <br>  ${teacher.name.last} </div>
      <div class="teacher-item__job">${teacher.course}</div>
      <div class="teacher-item__location">${teacher.country}</div>


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
