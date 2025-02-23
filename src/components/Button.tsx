type ButtonProps = {
   text?: string;
   onClick?: () => void;
};

const Button = ({ text = "Button", onClick = () => {} }: ButtonProps) => {
   return (
      <button className="btn" onClick={onClick}>
         <span>{text}</span>
      </button>
   );
};

export default Button;
