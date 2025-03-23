import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  desc: string;
  icon?: ReactNode;
}

const AnimatedButton = ({ icon, text, desc, onClick, ...rest }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="relative overflow-hidden bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg flex items-center justify-center gap-2  w-48 h-14 group"
      {...rest}
    >
      {/* icono y texto principal */}
      <div className="absolute flex items-center gap-2 transition-all duration-300 transform group-hover:-translate-y-6 opacity-100 group-hover:opacity-0">
        {icon && icon}
        <span>{text}</span>
      </div>
      {/* texto secundario */}
      <div className="absolute transition-all duration-300 transform translate-y-6 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
        {desc}
      </div>
    </button>
  );
};

export default AnimatedButton;
