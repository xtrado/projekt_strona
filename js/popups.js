const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelector('.modal.active')
  const modals2 = document.querySelector('.modal2.active')
  const modals3 = document.querySelector('.modal3.active')
  const modals4 = document.querySelector('.modal4.active')
  const modals5 = document.querySelector('.modal5.active')
  const modals6 = document.querySelector('.modal6.active')
  const modals7 = document.querySelector('.modal7.active')
  const modals8 = document.querySelector('.modal8.active')
  const modals9 = document.querySelector('.modal9.active')
  const modals10 = document.querySelector('.modal10.active')
  const modals11 = document.querySelector('.modal11.active')
  const modals12 = document.querySelector('.modal12.active')
  const all_modals = [modals, modals2, modals3, modals4,
    modals5, modals6, modals7, modals8, modals9, modals10, modals11, modals12]
  for(let i = 0; i < all_modals.length; i++){
      if (all_modals[i] != null){
          closeModal(all_modals[i])
      }
  }
//   if (modals != null){
//       closeModal(modals)
//   }else if (modals2 != null){
//       closeModal(modals2)
//   }else{
//       closeModal(modals3)
//   }
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    const modal2 = button.closest('.modal2')
    const modal3 = button.closest('.modal3')
    const modal4 = button.closest('.modal4')
    const modal5 = button.closest('.modal5')
    const modal6 = button.closest('.modal6')
    const modal7 = button.closest('.modal7')
    const modal8 = button.closest('.modal8')
    const modal9 = button.closest('.modal9')
    const modal10 = button.closest('.modal10')
    const modal11 = button.closest('.modal11')
    const modal12 = button.closest('.modal12')
    const all_modal = [modal, modal2, modal3, modal4, modal5, modal6,
    modal7, modal8, modal9, modal10, modal11, modal12]
    for(let i = 0; i < all_modal.length+1; i++){
        if (all_modal[i] != null){
            closeModal(all_modal[i])
        }
    }
    // if (modal != null){
    //     closeModal(modal)
    // }else if (modal2 != null){
    //     closeModal(modal2)
    // }else{
    //     closeModal(modal3)
    // }
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}