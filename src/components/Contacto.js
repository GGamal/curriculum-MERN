import React from 'react'

export const Contacto = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Contacto</h1>

      <form className='contact' action='mailto:gamalmaruan57@gmail.com'>
        <input type="text" placeholder='Nombre' name='nombre'/>
        <input type="text" placeholder='Apellido' name='apellido'/>
        <input type="text" placeholder='Email' name="email"/>
        <input type="submit" value="Enviar"/>

      </form>
    </div>
  )
}
