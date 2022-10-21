import { hideLoader, showLoader } from '@/js/helpers/loaders.js'
import { handleError } from '@/js/helpers/handleError.js'
// import { createElement } from '@/js/helpers/createElement.js'
import { createELement } from '@/js/helpers/createElement'

class Statistics {
  constructor({ store }) {
    this.store = store
    this.statisticsContent = document.querySelector('.statistics__content')
    this.statisticsListContainer = document.querySelector('.statistics-table__body')
    this.sortingBtns = document.querySelectorAll('.statistics-table__sorting-btn')
    this.activeSortingParameter = null
    this.paginationContainer = document.querySelector('.statistics__pagination')

    this.currentPage = 1
    this.teacherPerPage = 3

    this.initSorting({ sortingBtns: this.sortingBtns })
    this.renderStoredTeachers()

    this.store.hooksStore.on('teachersChanged', () => {
      this.renderStoredTeachers()
    })
    this.store.hooksStore.on('teacherDeleted', () => {
      this.renderStoredTeachers()
    })
  }

  async initSorting({ sortingBtns }) {
    sortingBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const parameterName = btn.dataset.name

        if (this.activeSortingParameter !== parameterName) {
          this.activeSortingParameter = parameterName
          this.renderSortedTeachersList({ parameterName })
        }
      })
    })
  }

  async renderSortedTeachersList({ parameterName }) {
    const teachers = await this.store.getTeachers()
    const sortedTeachers = await this.sortTeachersByParameter({ teachers, parameterName })
    this.renderStatisticList({ teachers: sortedTeachers })
  }

  async sortTeachersByParameter({ teachers, parameterName }) {
    return teachers.sort((a, b) => {
      if (parameterName === 'name') {
        if (a.name.first.toUpperCase() > b.name.first.toUpperCase())
          return 1

        return -1
      }
      else if ((typeof a[parameterName]) === 'string') {
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
    showLoader(this.statisticsContent)

    try {
      const teachers = await this.store.getTeachers()
      this.renderStatisticList({ teachers })
    }
    catch (error) {
      handleError(error)
    }
    finally {
      hideLoader(this.statisticsContent)
    }
  }

  async renderStatisticList({ teachers }) {
    const pagesNumber = Math.ceil(teachers.length / this.teacherPerPage)
    const currentPageTeachers = teachers.slice((this.currentPage - 1) * this.teacherPerPage, this.currentPage * this.teacherPerPage)

    this.paginationContainer.innerHTML = ''
    for (let i = 0; i < pagesNumber; i++) {
      const pageBtn = createELement('a', {
        classList: 'pagination__item',
        innerText: i + 1,
      })
      if (i === this.currentPage - 1)
        pageBtn.classList.add('pagination__item--active')

      pageBtn.addEventListener('click', () => {
        if (this.currentPage !== i + 1) {
          this.currentPage = i + 1
          this.renderStatisticList({ teachers })
        }
      })

      this.paginationContainer.append(pageBtn)
    }

    this.statisticsListContainer.innerHTML = ''
    currentPageTeachers.forEach(teacher => this.renderStatisticItem({ teacher }))
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

    this.statisticsListContainer.insertAdjacentElement('beforeEnd', statisticItem)
  }
}

export { Statistics }
