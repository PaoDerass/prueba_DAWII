import React, { useContext, useState, useEffect } from 'react'
import { PlantillaReact } from '../Modelos/plantillareact'
import { contextTema } from './ContextTema'
import { Tema } from '../Modelos/tema'

export default function ProviderTema({children}: PlantillaReact) {

    const [temas, setTemas] = useState<Tema[]>([])
    const [temasInteresantes, setTemasInteresantes] = useState<Tema[]>([])


    useEffect(() => {
        const temasIniciales: Tema[] = []
        for(let i = 1; i <= 20; i++) {
            temasIniciales.push({
                id: i,
                titulo: `Tema ${i}`,
                interesante: false
            })
        }
        setTemas(temasIniciales)
    }, [])

    
    useEffect(() => {
        const interesantes = temas.filter(tema => tema.interesante)
        setTemasInteresantes(interesantes)
    }, [temas])

    function marcarInteresante(id: number) {
        const nuevosTemas = temas.map(tema => {
            if(tema.id === id) {
                return {...tema, interesante: !tema.interesante}
            }
            return tema
        })
        setTemas(nuevosTemas)
    }

    return (
        <contextTema.Provider value={{temas, setTemas, marcarInteresante, temasInteresantes}}>
            {children}
        </contextTema.Provider>
    )
}

export function useContextTema() {
    return useContext(contextTema)
}