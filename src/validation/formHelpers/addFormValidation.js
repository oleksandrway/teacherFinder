import { validateData } from './validateData'
import { getDataFromForm } from './getDataFromForm'
import { handleErrors } from './handleErrors'

function validateForm(form, fields, fieldsValidationRules) {
  const data = getDataFromForm(form, fields)

  const errors = validateData(data, fieldsValidationRules)

  if (errors.length === 0)
  // form.reset()
    return true

  else
    handleErrors(errors, form)

  form.addEventListener('input', () => {
    const data = getDataFromForm(form, fields)

    const errors = validateData(data, fieldsValidationRules)

    handleErrors(errors, form)
  })

  return false
}

export { validateForm }
