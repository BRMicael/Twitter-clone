import { RefreshIcon } from '@heroicons/react/solid'
import { ChatIcon, HeartIcon } from '@heroicons/react/outline'

const Tweet = () => {
  return (
    <section className="flex flex-col py-[14px] px-[16px] border-b border-outline w-full">
        <div className="flex items-center font-sm text-gray"  id="retweeted">
            <RefreshIcon className="h-4 w-4 ml-[35px] mr-[9px]" />
            Você retweetou
        </div>

        <body>
            <div></div>

            <div className="flex flex-col">
                <div className="flex">
                    <strong className="font-base">Rocketseat</strong>
                    <span className="font-base">@rocket</span>
                    <time className="font-base">• 27 de jun</time>
                </div>


                {/* <div></div>  */}

                <div className="flex" id="icons">
                    <div className="flex">
                        <ChatIcon className="h-4 w-4" /> 12 
                    </div>
                    <div className="flex">
                        <RefreshIcon className="h-4 w-4" /> 12
                    </div>
                    <div className="flex">
                        <HeartIcon className="h-4 w-4" /> 322
                    </div>
                </div>
            </div>
        </body>
        
    </section>
  )
}

export default Tweet