import { createELement } from '@/js/helpers/createElement'

function showWindowLoader() {
  const loader = createELement('img', {
    src: '/spinnerWhite.svg',
    classList: 'window-loader__img',
  })
  const loaderContainer = createELement('div', {
    classList: 'window-loader',
  })
  loaderContainer.appendChild(loader)
  document.body.appendChild(loaderContainer)
}

function hideWindowLoader() {
  const loader = document.body.querySelector('.window-loader')
  loader.remove()
}

function showLoader(container) {
  container.classList.add('loading')
  const loaderContainer = createELement('div', {
    classList: 'teachers-loader',
  })

  const loader = createELement('img', {
    src: '/spinnerBlack.svg',
    classList: 'teachers-loader__img',
  })

  loaderContainer.appendChild(loader)
  container.insertAdjacentElement('afterBegin', loaderContainer)
}

function hideLoader(container) {
  const loader = container.querySelector('.teachers-loader')
  if (loader)
    loader.remove()
  container.classList.remove('loading')
}

export { showWindowLoader, hideWindowLoader, showLoader, hideLoader }
