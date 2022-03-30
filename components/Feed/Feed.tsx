import Tweet from "../Tweet/Tweet"

export const Feed = () => {
  return (
    <div className="flex flex-col ">
        <ul className="flex flex-row flex-nowrap shrink items-center text-twitter justify-between pt-[15px] text-[15px] cursor-pointer border-b border-outline">
            <li className="FeedMenuItem group"><span className="group-active:border-b">Twetts</span></li>
            <li className="FeedMenuItem"><span>Twetts e respostas</span></li>
            <li className="FeedMenuItem"><span>Mídia</span></li>
            <li className="FeedMenuItem"><span>Curtidas</span></li>
        </ul>

        <div className="flex flex-col shrink-0">
            <Tweet />
            <Tweet />
            <Tweet />
        </div>

    </div>
  )
}
