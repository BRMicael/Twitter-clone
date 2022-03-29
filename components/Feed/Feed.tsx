import Tweet from "../Tweet/Tweet"

export const Feed = () => {
  return (
    <div className="flex flex-col ">
        <ul className="flex flex-row items-center text-twitter justify-between px-[15px] pt-[15px] text-[14px] cursor-pointer border-b border-outline
        ssm:px-[31px]">
            <li className="flex justify-center items-center min-w-[56px] h-[50px] active:border-b border-twitter">Twetts</li>
            <li className="flex justify-center items-center min-w-[56px] h-[50px]">Twetts & replies</li>
            <li className="flex justify-center items-center min-w-[56px] h-[50px]">Media</li>
            <li className="flex justify-center items-center min-w-[56px] h-[50px]">Likes</li>
        </ul>

        <div className="flex flex-col shrink-0">
            <Tweet />
        </div>

    </div>
  )
}
