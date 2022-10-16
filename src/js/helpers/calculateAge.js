function calculateAge(b_date) {
  const date = new Date(b_date)
  const age = new Date().getFullYear() - date.getFullYear()
  return age
}

export { calculateAge }
