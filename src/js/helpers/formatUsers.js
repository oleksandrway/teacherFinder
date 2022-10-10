function formatUsers(users) {
  let id = 0
  return users.map((user) => {
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
      picture: user.picture.large,
      favorite: false,
      notes: ' He is a good teacher',
    }

    return formatedUser
  })
}

export { formatUsers }
