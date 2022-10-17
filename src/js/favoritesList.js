import { createELement } from '@/js/helpers/createElement'
class Favorites {
  constructor({ store }) {
    this.store = store
    this.favoritesContainer = document.querySelector('.favorite-teachers-list')
    // this.favoriteTeachers = this.store.getFavoriteTeachers()

    this.renderFavoritesList()

    this.store.hooksStore.on('teachersChanged', () => {
      this.renderFavoritesList()
    })
  }

  async renderFavoritesList() {
    this.favoritesContainer.innerHTML = ''
    const favoriteTeachers = await this.store.getFavoriteTeachers()
    favoriteTeachers.forEach(teacher => this.renderFavoriteTeacherItem(teacher))
  }

  renderFavoriteTeacherItem(teacher) {
    const favoriteTeacherItem = createELement('li', {
      classList: 'teacher-item favorites__item',
    })
    favoriteTeacherItem.innerHTML = `
    <img src='${teacher.pictureURL}' alt="avatar" class="teacher-item__img">
    <div class="teacher-item__name">${teacher.name.first} <br> ${teacher.name.last}</div>
     <div class="teacher-item__location">${teacher.country}</div>
    `
    this.favoritesContainer.insertAdjacentElement('beforeEnd', favoriteTeacherItem)
  }

//   <li class="teacher-item favorites__item">
//   <img src='https://randomuser.me/api/portraits/men/28.jpg' alt="avatar" class="teacher-item__img">
//   <div class="teacher-item__name">Ihor <br> Tkachuk</div>
//   <div class="teacher-item__location">Ukraine</div>
// </li>
}

// const favorites = new Favorites()

export { Favorites }
