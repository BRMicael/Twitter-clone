import React from "react";

export default function Icon({children = {}, color = "", bg = '', number = ''}) {


return (
    <div className={`flex items-center text-gray cursor-pointer group ${color}`}>
        <div className={`flex items-center justify-center h-[34.75px] w-[34.75px] bg-transparent rounded-[50%] mr-2 transition duration-100 ease-in ${bg}`}>
            {children}   
        </div> {number}
    </div>
  )
}

