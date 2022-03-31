import { SearchIcon } from "@heroicons/react/outline";
import BoxList from "../BoxList/BoxList";
import BoxInfo from "../BoxInfo/BoxInfo";
import StickyBox from "react-sticky-box";


export default function Sidebar() {

  const users = [
    {
      name: 'John',
      nickname: '@John',
    },
     {
      name: 'Pedro',
      nickname: '@pedro',
    },
    {
      name: 'Casimiro',
      nickname: '@casimiro'
    }
  ]

  const info = [
    {
      underText:"Assunto do Momento em Brasil",
      text:"BBB",
      belowText:"22.049 Tweets",
      rightInfo: true
    },
    {
      underText:"Entretenimento",
      text:"Homem Aranha",
      belowText:"32.349 Tweets",
      rightInfo: false
    },
    {
      underText:"Assunto do Momento em Brasil",
      text:"Futebol",
      belowText:"12.049 Tweets",
      rightInfo: true
    },
    {
      underText:"Política • Hoje cedo",
      text:"Eleições",
      belowText:"20.049 Tweets",
      rightInfo: true
    },

  ]

  return (
    <aside className="hidden lg:flex ml-6 flex-col w-[350px]">
        <div className="py-[10px]  w-full bg-primary fixed z-10 max-h-[53px]">
           <input placeholder="Buscar no Twitter" className="w-[350px]  h-42 p-2 pl-12 font-sm rounded-[20px] bg-search 
           placeholder:text-gray border border-slate-300 shadow-sm focus:outline-none focus:border-sky-500 
           focus:ring-sky-500 focus:ring-2 sm:text-sm" id="search" />
           <SearchIcon id="iconSearch" className="w-8 h-8 relative top-[-35px] pl-3 text-gray" /> 
        </div>

        <StickyBox>
        <section className="flex flex-col pt-[57px] pb-[200px]">

            <BoxList title="Talvez você curta" users={users} />
            <BoxInfo title="Oque está acontecendo" info={info} />
        </section>
        
        </StickyBox>
    </aside>
  )
}
