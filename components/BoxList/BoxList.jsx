import { BadgeCheckIcon } from "@heroicons/react/solid";
import React from "react";



const BoxList = ({ title, users }) => {
  return (
    <section className="flex flex-col bg-secondary rounded-[50%] mb-3">
      <div className="containerList">
        <span className="text-white font-bold text-[20px]">{title}</span>
      </div>

        {users.map(({nickname, name}) => {
     

            return (
          <div className="containerList group" key={nickname}>
              <div className="w-10 h-10 rounded-[50%] shrink-0 bg-gray "></div>
      
              <div className="flex flex-col items-start justify-start ml-2">
                <div className="flex items-center">
                  <span className="text-[15px] font-bold mr-[2px] no-underline decoration-white hover:underline">{name}</span>
                  <BadgeCheckIcon className="h-4 w-4 bg-secondary group-hover:bg-[#333639] transition duration-100 ease-in text-white" />
                </div>
                <p className="leading-4 text-[15px] text-gray">{nickname}</p>
              </div>
              <div className="w-full flex justify-end items-center">
                  <button className="flex items-center justify-center w-[77px] p-4 font-semibold h-[32px] bg-[#fff] text-primary rounded-[20px] hover:bg-white transition duration-100 ease-in"><p className="mb-[2px]">Seguir</p></button>
              </div>
          </div>
            )
            })}


      <div className="containerList">
        <p className="text-twitter text-sm">Mostrar mais</p>
      </div>
    </section>
  );
};

export default BoxList;