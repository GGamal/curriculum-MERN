import React from 'react'

export const Footer = () => {
    const Año = new Date().getFullYear()
  return (
    <footer className='footer'>
        Portafolio Gamal Maruan &copy; año {Año}
    </footer>
  )
}
