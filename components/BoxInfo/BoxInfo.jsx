import { DotsHorizontalIcon } from "@heroicons/react/solid"
import Icon from "../Icon/Icon"

const Boxinfo = ({title, info}) => {
  return (
    <>
    <section className="flex flex-col bg-secondary rounded-[50%] mb-2">
    <div className="containerList">
      <span className="text-white font-bold text-[20px]">{title}</span>
    </div>

      {info.map(({underText, text, belowText, rightInfo}) => {
   

          return (
        <div className="containerList group" key={text}>
            <div className="flex flex-col items-start justify-start ml-2 w-[80%]">
           
              <p className="ml-[-8px] leading-4 text-[13px] text-gray">{underText}</p>
              <span className=" ml-[-8px] text-[15px] font-bold mr-[2px]">{text}</span>
              <p className="ml-[-8px] leading-4 text-[13px] text-gray">{belowText}</p>

            </div>

            <div className="w-[20%] flex justify-end items-center">
                {
                    rightInfo 
                    ? <div className="w-12 h-12 rounded-[10%] shrink-0 bg-gray "></div>
                    : <Icon color="hover:text-twitter" bg="hover:bg-cyan-400/10" ><DotsHorizontalIcon className="h-4 w-4"/></Icon>
                }
            </div>
        </div>
          )
          })}


    <div className="containerList">
      <p className="text-twitter text-sm">Mostrar mais</p>
    </div>
    
  </section>
  <p className="text-sm text-gray">Direitos de imagem ao Twitter</p>
  </>
  )
}

export default Boxinfo