import { createContext } from "react"
import { Tema } from "../Modelos/tema"

export const contextTema = createContext({
    temas: [] as Tema[],
    setTemas: (temas: Tema[]) => {},
    marcarInteresante: (id: number) => {},
    temasInteresantes: [] as Tema[]
})