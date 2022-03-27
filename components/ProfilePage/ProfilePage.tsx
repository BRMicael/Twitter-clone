import { CakeIcon, LocationMarkerIcon } from '@heroicons/react/solid'
import React from 'react'

const ProfilePage = () => {
  return (
    <section className="flex flex-col max-w-full overflow-y-auto" > {/* adicionar o scrollbar-width:none*/}
        <div>
            <div id="banner" className="relative shrink-0 w-full bg-twitter ">
                <div id="avatar"></div>
            </div>    
        </div>

        <div id="profile-data" className="flex flex-col relative">
            {/* <button></button> */} 

            <h1 className="font-bold text-lg">Micael Souza</h1>
            <h2 className="font-normal text-base text-gray">@mica3l_souza</h2>

            <p className="text-base">Developer at <a href="#" className="text-twitter">@Google</a></p>

            <ul className="mt-[10px] mb-[10px]">
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
                <span className="text-sm text-gray">
                    seguindo <strong>104</strong>
                </span>
                <span className="text-sm text-gray ml-5">
                    <strong>672 </strong> seguidores
                </span>
            </div>
        </div>
    </section>
  )
}

export default ProfilePage