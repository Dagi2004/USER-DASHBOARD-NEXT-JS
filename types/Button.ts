export interface ButtonProps{
    buttonLabel:string
  backgroundColor:"blue" | "gray" | "green" ;
  onClick?:()=>void;
  type?: "button" | "submit" | "reset";
  
  }