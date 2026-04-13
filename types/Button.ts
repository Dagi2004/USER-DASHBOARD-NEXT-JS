export interface ButtonProps{
    buttonLabel:string
  backgroundColor:"blue" | "gray" ;
  onClick?:()=>void;
  type?: "button" | "submit" | "reset";
  
  }