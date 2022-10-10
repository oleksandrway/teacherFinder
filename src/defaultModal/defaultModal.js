
import './defaultModal.scss'

function createModal({ openBtnSelector, preContentSelector }) {
  const preContent = document.querySelector(preContentSelector)
  let content
  if (!preContent || typeof preContent === 'string') {
    console.warn('you should pass a class of  element in function openModal')
    content = document.createElement('div')
    content.classList.add('errorMessage')
    content.innerText = 'not found'
  }
  else {
    content = preContent
    content.removeAttribute('hidden')
  }

  const defaultOverlay = document.createElement('div')
  defaultOverlay.className = 'defaultOverlay '

  function hideModal() {
    defaultOverlay.classList.remove('defaultOverlay--active')
    document.body.classList.remove('no-scroll')
  }

  const defaultModal = document.createElement('div')
  defaultModal.className = 'defaultModal'

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

  const openBtn = document.querySelector(openBtnSelector)

  openBtn.addEventListener('click', () => {
    defaultOverlay.classList.add('defaultOverlay--active')
    document.body.classList.add('no-scroll')
  })
}

export { createModal }
