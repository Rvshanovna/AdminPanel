import type { FC } from "react"

interface InputType {
    type:"email" | "password" | "text",
    placeholder:string,
    extraClass?:string,
    name:string
}
const Input:FC<InputType> = ({type, placeholder, extraClass, name}) => {
  return (
    <input required name={name} type={type} placeholder={placeholder} className={`w-full pl-10 pr-4 py-3 rounded-xl bg-[#0f172a]/70 text-white placeholder-gray-400 focus:outline-none 
        focus:ring-2 focus:ring-[#ea580c] transition 
        ${extraClass}`}/>
  )
}

export default Input