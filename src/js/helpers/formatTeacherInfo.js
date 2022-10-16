function formatTeacherInfo(teacherInfo) {
  const formatedThecherInfo = {
    name: {
      first: teacherInfo.firstName,
      last: teacherInfo.lastName,
    },
    course: teacherInfo.course,
    country: teacherInfo.country,
    city: teacherInfo.city,
    email: teacherInfo.email,
    phone: teacherInfo.phone,
    b_date: teacherInfo.b_date,
    gender: teacherInfo.gender,
    pictureURL: teacherInfo.pictureURL,
    favorite: teacherInfo.favorite,
    notes: teacherInfo.notes,

  }

  return formatedThecherInfo
}

export { formatTeacherInfo }
