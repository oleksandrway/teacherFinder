// // validation

import '@/validation/style.scss'
// import EventBus from 'js-event-bus'
import { hooksStore } from '@/js/data/store.js'

import { formatTeacherInfo } from '@/js/helpers/formatTeacherInfo'
import { fields, fieldsValidationRules } from '@/validation/data/post-form'
import { validateForm } from '@/validation/formHelpers/addFormValidation'
import { openModal } from '@/defaultModal/defaultModal.js'

class CreatingTeacherModal {
  constructor() {
    // this.hooksAddTeacher = new EventBus()

    this.creatingTeacherModalBtn = document.querySelector('.open-modal-btn')
    this.creatingTeacherModalContent = document.querySelector('.modal-add-teacher')
    this.openModal = openModal
    this.newTeacherForm = document.querySelector('#add-teacher')

    this.creatingTeacherModalBtn.addEventListener('click', () => {
      this.openModal({ content: this.creatingTeacherModalContent, transition: 300 })
    })
    this.initForm(this.newTeacherForm)
  }

  initForm(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault()

      const isValid = validateForm(this.newTeacherForm, fields, fieldsValidationRules)
      if (isValid) {
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData)
        const teacherInfo = formatTeacherInfo(data)
        console.log(teacherInfo)
        hooksStore.emit('teacherAdded', null, { teacherInfo })
      }
    })
  }
}
// validation
// addFormValidation(this.newTeacherForm, fields, fieldsValidationRules, (teacherInfo) => {
//   this.hooksTopTeachers.emit('newTeacherAdded', null, { teacherInfo: formatTeacherInfo(teacherInfo) })
// },
// )

// this.view.hooksTopTeachers.on('newTeacherAdded', ({ teacherInfo }) => {
//   console.log('newTeacher', teacherInfo)
// })

export { CreatingTeacherModal }
