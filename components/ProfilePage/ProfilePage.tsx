import { CakeIcon, LocationMarkerIcon } from '@heroicons/react/solid'
import React from 'react'
import Button from '../Button/Button'
import { Feed } from '../Feed/Feed'

const ProfilePage = () => {
  return (
    <section className="flex flex-col max-w-full overflow-y-auto" > {/* adicionar o scrollbar-width:none*/}
        
            <div id="banner" className="relative shrink-0 w-full bg-twitter ">
                <div id="avatar"></div>
            </div>    
       

        <div id="profile-data" className="flex flex-col relative">

            <Button radius='rounded-[25px]' outlined={true} className='absolute top-[2vw] right-[7px] text-sm ssm:top-[10px] py-2 px-5' >Editar Perfil</Button>

            <h1 className="font-bold text-lg">Micael Souza</h1>
            <h2 className="font-normal text-base text-gray">@mica3l_souza</h2>

            <p className="text-base">Developer at <a href="#" className="text-twitter">@Google</a></p>

            <ul className="mt-[10px] mb-[10px]" id='info'>
                <li className="flex text-sm text-gray items-center">
                    <LocationMarkerIcon className="iconBanner mr-[5px] text-gray" />
                    São Paulo, Brasil
                </li>
                <li className="flex text-sm text-gray items-center">
                    <CakeIcon className="iconBanner mr-[5px] text-gray" />
                    Nascido em 22 de agosto de 2003
                </li>
            </ul>

            <div id="followage" className="flex">
                <span className="text-sm text-gray no-underline decoration-white hover:underline">
                <strong className="text-white">104</strong> Seguindo 
                </span>
                <span className="text-sm text-gray ml-5 no-underline decoration-white hover:underline">
                    <strong className="text-white">672 </strong> Seguidores
                </span>
            </div>
        </div>

        <Feed />
    </section>
  )
}

export default ProfilePage