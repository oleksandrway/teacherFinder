
import './defaultModal.scss'

function bodyLock() {
  const lockPaddingValue = `${window.innerWidth - document.querySelector('body').offsetWidth}px`
  document.body.style.paddingRight = lockPaddingValue
  document.body.classList.add('no-scroll')
}

function bodyUnlock() {
  document.body.classList.remove('no-scroll')
  document.body.style.paddingRight = ''
}

function openModal({ content, transition }) {
  bodyLock()
  const defaultOverlay = document.createElement('div')
  defaultOverlay.className = 'defaultOverlay defaultOverlay--active'

  function hideModal() {
    defaultOverlay.classList.remove('defaultOverlay--active')
    setTimeout(() => {
      bodyUnlock()
      defaultOverlay.remove()
    }, transition)
  }

  const defaultModal = document.createElement('div')
  defaultModal.className = 'defaultModal'

  setTimeout(() => {
    defaultModal.classList.add('defaultModal--active')
  }, 1)

  const modalClose = document.createElement('div')

  modalClose.className = 'modal__close'
  const span1 = document.createElement('span')
  const span2 = document.createElement('span')

  modalClose.append(span1)
  modalClose.append(span2)

  defaultOverlay.append(defaultModal)
  defaultModal.append(modalClose)
  defaultModal.append(content)

  modalClose.addEventListener('click', hideModal)

  defaultOverlay.addEventListener('click', (e) => {
    if (e.target === defaultOverlay)
      hideModal()
  })
  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape')
      hideModal()
  })

  document.body.appendChild(defaultOverlay)

  // const openBtn = document.querySelector(openBtnSelector)

  // openBtn.addEventListener('click', () => {
  //   defaultOverlay.classList.add('defaultOverlay--active')
  //   document.body.classList.add('no-scroll')
  // })
}

export { openModal }
