import React, { useEffect, useState } from 'react'
import { trabajos } from '../data/trabajos'
import { useParams } from 'react-router-dom'


export const Proyecto = () => {
    
    const [proyecto, setProyecto] = useState({})
    //Uso el useParams para recoger el id del proyecto y poder compararlo con el id de los proyectos hechos, para eso tengo que importar el archivos trabajos.js y usar el 
    //useEffect para que se ejecute 1 vez inicializada la pagina el filter que compara el id que me llego por params con el id de los proyectos existentes
    const nombre_proyecto = useParams()

    useEffect(() => {
        let proyecto = trabajos.filter(trabajo => trabajo.id === nombre_proyecto.id)
        setProyecto(proyecto[0])
        // eslint-disable-next-line
    },[])
  return (
    <div className='page page-work'>
      <div className='mask'>
            <img src={"/images/" + proyecto.id + ".jpg"} alt=""/>
      </div>
      <h1 className='heading'>{proyecto.nombre}</h1>
      
      <h3>{proyecto.tecnologias}</h3>
      <p>{proyecto.descripcion}</p>
      <a href={"https://" + proyecto.url} target="blank">Ir al proyecto</a>
      
      
     
    </div>

  )
}
