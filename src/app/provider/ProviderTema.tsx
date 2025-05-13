import React, {useContext, useState} from "react";
import { PlantillaReact } from "../models/PlantillaReact";
import { contextTema } from "../context/TemaContext";
import { Tema } from "../models/Tema";

export default function ProviderTema({children}:PlantillaReact){
    const [tema, setTema] = useState<Tema[]>([])
    const [temaLista, setTemaLista]= useState<Tema[]>([]);

    function agregarTema(tema:Tema){
        setTemaLista([...temaLista, tema])
    }

    return(
        <contextTema.Provider value={{tema, setTemaLista, agregarTema}}>
            {children}
        </contextTema.Provider>
    )

}

export function useContextTema(){
    return useContext(contextTema)
}

