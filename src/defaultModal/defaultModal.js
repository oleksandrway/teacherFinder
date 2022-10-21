
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

function hideModal(transition) {
  const defaultOverlay = document.querySelector('.defaultOverlay')
  defaultOverlay.classList.remove('defaultOverlay--active')
  setTimeout(() => {
    bodyUnlock()
    defaultOverlay.remove()
  }, transition)
}

function openModal({ content, title, transition }) {
  bodyLock()
  const defaultOverlay = document.createElement('div')
  defaultOverlay.className = 'defaultOverlay defaultOverlay--active'

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

  const modalHeader = document.createElement('div')
  modalHeader.className = 'modal-header'
  modalHeader.innerText = title

  defaultOverlay.append(defaultModal)
  defaultModal.append(modalHeader)
  defaultModal.append(modalClose)
  defaultModal.append(content)

  modalClose.addEventListener('click', () => hideModal(transition))

  defaultOverlay.addEventListener('click', (e) => {
    if (e.target === defaultOverlay)
      hideModal(transition)
  })
  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape')
      hideModal(transition)
  })

  document.body.appendChild(defaultOverlay)

  // const openBtn = document.querySelector(openBtnSelector)

  // openBtn.addEventListener('click', () => {
  //   defaultOverlay.classList.add('defaultOverlay--active')
  //   document.body.classList.add('no-scroll')
  // })
}

export { openModal, hideModal }
