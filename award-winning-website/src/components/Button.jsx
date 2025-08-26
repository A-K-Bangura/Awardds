import React from "react";

const Button = ({
  id,
  title,
  leftIcon,
  rightIcon,
  containerClass = "",
  onClick,
  ...props
}) => {
  return (
    <button
      id={id}
      className={`${containerClass} group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black`}
      onClick={onClick}
      {...props}
    >
      {leftIcon && <span className="inline-flex items-center">{leftIcon}</span>}
      <span className="relative overflow-hidden font-general text-xs uppercase inline-flex items-center">
        {title}
      </span>
      {rightIcon && (
        <span className="inline-flex items-center">{rightIcon}</span>
      )}
    </button>
  );
};

export default Button;
