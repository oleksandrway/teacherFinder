
class Statistics {
  constructor({ store }) {
    this.store = store
    this.statisticsContainer = document.querySelector('.statistics-table__body')
    this.sortingBtns = document.querySelectorAll('.statistics-table__sorting-btn')

    this.initSorting({ sortingBtns: this.sortingBtns })
    this.renderStoredTeachers()
  }

  async initSorting({ sortingBtns }) {
    sortingBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        this.renderSortedTeachersList({ parameterName: btn.dataset.name })
      })
    })
  }

  async renderSortedTeachersList({ parameterName }) {
    console.log(parameterName)
    const teachers = await this.store.getTeachers()
    const sortedTeachers = await this.sortTeachersByParameter({ teachers, parameterName })
    console.log(sortedTeachers)
    this.renderStatisticList({ teachers: sortedTeachers })
  }

  async sortTeachersByParameter({ teachers, parameterName }) {
    console.log(teachers, parameterName)
    return teachers.sort((a, b) => {
      if ((typeof a[parameterName]) === 'string') {
        console.log('string')
        if (a[parameterName].toUpperCase() > b[parameterName].toUpperCase())
          return 1

        return -1
      }
      else {
        return a[parameterName] - b[parameterName]
      }
    })
  }

  async renderStoredTeachers() {
    const teachers = await this.store.getTeachers()
    this.renderStatisticList({ teachers })
  }

  async renderStatisticList({ teachers }) {
    this.statisticsContainer.innerHTML = ''
    teachers.forEach(teacher => this.renderStatisticItem({ teacher }))
  }

  renderStatisticItem({ teacher }) {
    document.createElement('tr')
    const statisticItem = document.createElement('tr')
    statisticItem.innerHTML = `
    <td >${teacher.name.first} ${teacher.name.last}</td>
    <td >${teacher.course}</td>
    <td >${teacher.age}</td>
    <td >${teacher.gender}</td>
    <td >${teacher.country}</td>
    `

    this.statisticsContainer.insertAdjacentElement('beforeEnd', statisticItem)
  }
}

export { Statistics }
