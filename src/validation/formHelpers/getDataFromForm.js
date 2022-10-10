
function getDataFromField(field, form) {
  const formData = new FormData(form)
  if (field.type === 'checkbox')
    return formData.getAll(field.inputName)

  return formData.get(field.inputName)
}

function getDataFromForm(form, fields) {
  const data = {}
  fields.forEach((field) => {
    data[field.inputName] = getDataFromField(field, form)
  })

  return data
}

export { getDataFromForm }
