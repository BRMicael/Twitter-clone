import React, { Children } from "react";

export default function Button({
  outlined = true || false,
  children = "",
  className = "",
}) {
  return (
    <button
      className={`${
        outlined
          ? "bg-transparent text-twitter border border-solid border-twitter hover:bg-twitterDarkHover"
          : "bg-twitter text-white border-none hover:bg-twitterLightHover"
      } 
    p-4 rounded-[25px] font-boltext-sm cursor-pointer outline-0 ${className}`}
    >
      {children}
    </button>
  );
}
