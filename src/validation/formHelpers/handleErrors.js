function removeErrorFeedback(form) {
  const elementsWithError = form.querySelectorAll('.error')
  elementsWithError.forEach((fieldElement) => {
    fieldElement.classList.remove('error')
    const fieldParentBLock = fieldElement.closest('.form__item')
    const feedback = fieldParentBLock.querySelector('.invalid-feedback')
    if (feedback) feedback.remove()
  })
}

function addErrorFeedback(errors, form) {
  console.error(errors)

  errors.forEach((error) => {
    const errorMessage = error.errorMessage
    const inputName = error.inputName
    const fieldsElements = form.querySelectorAll(`[name="${inputName}"]`)

    fieldsElements.forEach((fieldElement) => {
      fieldElement.classList.add('error')
      const fieldParentBLock = fieldElement.closest('.form__item')
      if (!fieldParentBLock.querySelector('.invalid-feedback')) {
        const error = document.createElement('div')
        error.classList.add('invalid-feedback')
        error.innerText = errorMessage
        fieldParentBLock.insertAdjacentElement('beforeEnd', error)
      }
    },
    )
  },
  )
}
function handleErrors(errors, form) {
  removeErrorFeedback(form)

  addErrorFeedback(errors, form)
}

export { handleErrors }
