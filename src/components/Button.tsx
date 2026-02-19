import type { FC, ReactNode } from "react"

interface ButtonType{
    children:ReactNode,
    type:"button" | "submit"
    extraClass?:string
}

const Button:FC<ButtonType> = ({type, extraClass, children}) => {
  return (
    <button
            type={type}
            className={`${extraClass} w-full py-3 rounded-xl font-semibold text-white 
            bg-linear-to-r from-[#991b1b] via-[#ea580c] to-[#1e3a8a]
            hover:scale-[1.02] active:scale-95 transition duration-300 shadow-lg`}
          >{children}</button>
  )
}

export default Button