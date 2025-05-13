"use client";

import {createContext} from "react";
import {Tema} from "../models/Tema";

export const contextTema = createContext({
    tema: [] as Tema[],
    setTemaLista: (Tema: Tema[])=>{},
    agregarTema: (tema:Tema) =>{}
})