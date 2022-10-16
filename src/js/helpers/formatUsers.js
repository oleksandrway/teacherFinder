function formatUsers(users) {
  let id = 0
  const FormatedUsers = users.map((user) => {
    const formatedUser = {
      name: user.name,
      id: id++,
      course: user.course,
      country: user.location.country,
      city: user.location.city,
      email: user.email,
      phone: user.phone,
      b_date: user.dob.date,
      gender: user.gender,
      pictureURL: user.picture.large,
      favorite: user.favorite ? user.favorite : false,
      notes: ' He is a good teacher',
    }

    return formatedUser
  })
  return FormatedUsers
}

export { formatUsers }
