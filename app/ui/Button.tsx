"use client"
import { ButtonProps } from "@/types/Button";


export default function Button({buttonLabel,backgroundColor="blue",onClick,type="button"}:ButtonProps){
 const backgroundColorCLass={
   blue: "bg-[#5BCBFF] hover:bg-blue-400",
    gray: "bg-gray-500 hover:bg-gray-600",
 }[backgroundColor];


    return(
<button type={type}
onClick={onClick}
 className={`${backgroundColorCLass} px-6 py-2 font-bold rounded-md text-white transition-all duration-300 ease-in-out cursor-pointer active:scale-95`}>
    {buttonLabel}
 </button>
    );
}
