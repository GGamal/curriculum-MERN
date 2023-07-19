import React from 'react'
import { Link } from 'react-router-dom';
import { trabajos } from '../data/trabajos'

export const ListadoTrabajos = ({limite}) => {
  return (
      <section className='works'>
        {
        //La propiedad slice() lo que hace es poner un limite en el recorrido ejemplo: slice(0,2) va del indice 0 al 2
          trabajos.slice(0, limite).map(trabajo => {
            console.log(trabajo);
            return (
            <article key={trabajo.id} className="work-item">
              <div className='mask'>
                <img src={"/images/" + trabajo.id + ".jpg"} alt=""/>
              </div>
              <span>{trabajo.categorias}</span>
              <h2><Link to={"/proyecto/" + trabajo.id}>{trabajo.nombre}</Link></h2>
              <h3>{trabajo.tecnologias}</h3>
            </article>
            )
          })
        }
      </section>

      
  )
}
