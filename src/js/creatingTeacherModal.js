// // validation

import '@/validation/style.scss'

import { formatTeacherInfo } from '@/js/helpers/formatTeacherInfo'
import { fields, fieldsValidationRules } from '@/validation/data/post-form'
import { validateForm } from '@/validation/formHelpers/addFormValidation'
import { hideModal, openModal } from '@/defaultModal/defaultModal.js'
import { hideLoader, showLoader } from '@/js/helpers/loaders.js'

class CreatingTeacherModal {
  constructor(store) {
    this.store = store
    this.creatingTeacherModalBtn = document.querySelector('.open-modal-btn')
    this.creatingTeacherModalContent = document.querySelector('.modal-add-teacher')
    this.openModal = openModal
    this.newTeacherForm = document.querySelector('#add-teacher')
    // this.submitBtn = document.qs

    // showLoader(this.creatingTeacherModalContent)
    this.creatingTeacherModalBtn.addEventListener('click', () => {
      this.openModal({ content: this.creatingTeacherModalContent, title: 'Add teacher', transition: 300 })
    })

    this.store.hooksStore.on('teachersChanged', () => {
      hideModal(300)
      setTimeout(() => {
        hideLoader(this.creatingTeacherModalContent)
      }, 300)
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
        console.log(data)
        const teacherInfo = formatTeacherInfo(data)
        this.store.addTeacher({ teacherInfo })
        showLoader(this.creatingTeacherModalContent)
      }
    })
  }
}

export { CreatingTeacherModal }
