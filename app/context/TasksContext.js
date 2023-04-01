"use client";
import { createContext, useContext } from "react";
import { useState } from "react";

export const TaskContext = createContext();


//Esta es la función que permite compartir contexto entre los componentes
export const moviesContext = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error("No hay nada");
  return context;
};

export const TaskProvider = ({ children }) => {
    const [movie,setMovie] = useState([])
  const tasks = {movie,setMovie}; //aquí le pasamos setMovie al task , cosa de poder acceder a ello desde otro componente
  return (
    <TaskContext.Provider value={{ tasks }}>{children}</TaskContext.Provider>
  );
};
