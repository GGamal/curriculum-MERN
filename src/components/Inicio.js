import React from 'react'
import { Link } from 'react-router-dom'
import { ListadoTrabajos } from './ListadoTrabajos'


export const Inicio = () => {
  return (
    <div className='home'>
      <h1>
        Hola, soy <strong>Gamal Maruan</strong> y un soy desarrollador web de Cordoba,
        y ofrezco mis servicios de <strong>programacion y desarrollo</strong> en todo
        tipo de proyectos web
      </h1>

      <h2>
        Te ayudo a crear tu sitio o aplicaion web, tener mas
        visibilidad y relevancia en internet.<Link> Contacta conmigo</Link>
      </h2>

      <section className='last-works'>
        <h2 className='heading'>Algunos de mis proyectos</h2>
        <p>Estos son algunos de mis trabajos de desarrollos web</p>
        
       <ListadoTrabajos limite="2"/>
      </section>
    </div>
  )
}
