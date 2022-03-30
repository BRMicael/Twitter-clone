import React from "react";
export default function Button({
  outlined = true || false,
  children = "",
  className = "",
  radius = '',
}) {
  return (
    <button
      className={`${
        outlined
          ? "bg-transparent text-twitter border border-solid border-twitter hover:bg-twitterDarkHover"
          : "bg-twitter text-white border-none hover:bg-twitterLightHover"
      } 
    p-4 ${radius} font-bold text-base cursor-pointer outline-0 ${className}`}
    >
      <span>{children}</span>
    </button>
  );
}
