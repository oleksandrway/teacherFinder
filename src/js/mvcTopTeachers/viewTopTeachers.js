import EventBus from 'js-event-bus'
import { createELement } from '@/js/helpers/createElement'
import { openModal } from '@/defaultModal/defaultModal.js'
import { hideLoader, showLoader } from '@/js/helpers/loaders.js'

class ViewTopTeachers {
  constructor() {
    // this.teachersContainer = document.querySelector('.top-teachers')
    this.teachersList = document.querySelector('#top-teachers-list')
    this.hooksTopTeachers = new EventBus()
    this.openModal = openModal
    this.clearFavoriteBtn = document.querySelector('.favorite-quantity__btn')

    // top-teachers filters
    this.filtersInputs = ['#age-range', '#region', '#sex', '#with-photo', '#favorites'].map(selector => document.querySelector(selector))
    this.addFilterListeners(this.filtersInputs)

    this.clearFavoriteBtn.addEventListener('click', () => {
      this.hooksTopTeachers.emit('clearFavorite')
    })
  }

  renderTeacherInfoModal(teacher) {
    const teacherInfoModal = createELement('div', {
      classList: 'teacher-info-modal',
    })

    teacherInfoModal.innerHTML = `
    <div class="modal-header">
        <div class="teacher-info-modal__title">Add teacher</div>
      </div>

    `
    const mainInfo = createELement('div', {
      classList: 'main-info',
      innerHTML: `<img class="main-info__img"
      srcset="${teacher.pictureURL}">`,
    })

    const mainInfoText = createELement ('div', {
      classList: 'main-info__wrapper',
      innerHTML: `
      <div class="main-info__name">${teacher.name.first} ${teacher.name.last}</div>
      <div class="main-info__speciality">${teacher.course}</div>
      <div class="main-info__location">${teacher.city}, ${teacher.country}</div>
      <div class="main-info__personal">${teacher.age}, ${teacher.gender}</div>
      <div class="main-info__email">${teacher.email}</div>
      <div class="main-info__phone-number">071-488-9968</div>
      `,
    })

    const deleteBtn = createELement('button', {
      classList: 'btn btn--red mt-20px',
      innerText: 'delete',
    })

    deleteBtn.addEventListener('click', () => {
      console.log('delete')
    })

    const favoriteIcon = createELement('div', {
      classList: 'main-info__favorite',
    })

    if (teacher.favorite)
      favoriteIcon.classList.add('main-info__favorite--active')

    favoriteIcon.addEventListener('click', () => {
      favoriteIcon.classList.toggle('main-info__favorite--active')
      this.hooksTopTeachers.emit('favoriteIconClicked', null, { teacherId: teacher.id })
    })

    const infoFooter = createELement('div', {
      classList: 'info-footer',
      innerHTML: `<div class="info-footer__about">${teacher.notes}</div>`,
    })

    mainInfoText.insertAdjacentElement('beforeEnd', deleteBtn)
    mainInfo.insertAdjacentElement('afterBegin', favoriteIcon)
    mainInfo.insertAdjacentElement('beforeEnd', mainInfoText)
    teacherInfoModal.insertAdjacentElement('beforeEnd', mainInfo)
    teacherInfoModal.insertAdjacentElement('beforeEnd', infoFooter)

    this.openModal({ content: teacherInfoModal, transition: 300 })
  }

  addFilterListeners(filtersInputs) {
    filtersInputs.forEach((filter) => {
      if (filter.type === 'checkbox') {
        filter.addEventListener('change', () => {
          this.hooksTopTeachers.emit('filterChanged', null, { filterName: filter.name, filterValue: filter.checked })
        })
      }
      else {
        filter.addEventListener('change', () => {
          this.hooksTopTeachers.emit('filterChanged', null, { filterName: filter.name, filterValue: filter.value })
        })
      }
    })
  }

  renderTeachersList(teachers) {
    this.teachersList.innerHTML = ''
    teachers.forEach(teacher => this.renderTeacherItem(teacher))
  }

  renderTeacherItem(teacher) {
    const teacherItem = createELement('li', {
      classList: 'teachers-list__item',
    })

    const teacherItemBtn = createELement('button', {

      'classList': 'teacher-item teacher-item__button',
      'data-id': teacher.id,
    })

    teacherItemBtn.innerHTML = `
    
        <img class="teacher-item__img" src="${teacher.pictureURL}" alt=" teacher: ${teacher.name.first}  ${teacher.name.last}">

        <div class="teacher-item__name">${teacher.name.first} <br>  ${teacher.name.last} </div>
      <div class="teacher-item__job">${teacher.course}</div>
      <div class="teacher-item__location">${teacher.country}</div>
    `
    teacherItemBtn.addEventListener('click', (e) => {
      const teacherId = +e.target.closest('.teacher-item').dataset.id

      this.hooksTopTeachers.emit('teacherSelected', null, { teacherId })
    })

    if (teacher.favorite) {
      const favoriteIcon = createELement('div', {
        classList: 'teacher-item__favorite',
      })
      teacherItemBtn.insertAdjacentElement('afterBegin', favoriteIcon)
    }

    teacherItem.appendChild(teacherItemBtn)
    this.teachersList.appendChild(teacherItem)
  }

  showTeachersLoader() {
    showLoader(this.teachersList)
  }

  hideTeachersLoader() {
    hideLoader(this.teachersList)
  }
}

export { ViewTopTeachers }
