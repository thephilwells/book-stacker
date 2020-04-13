import React from 'react'
export const Button = ({ text, action }) => {
  return <button id={`${action}-button`}onClick={() => buttonAction(action)}>{text}</button>
}

const buttonAction = (action) => {
  switch (action) {
    case 'help':
      document.querySelector('#concierge').style.display = 'none'
      const modal = document.getElementById('help-modal')
      modal.style.display = 'flex'
	    document.querySelector('main').classList.toggle('obscured')
      break
    case 'reset':
      window.location.reload()
      break
    default:
      console.log('QUACK')
  }
}