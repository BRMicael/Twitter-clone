import Tweet from "../Tweet/Tweet"

export const Feed = () => {
  return (
    <div className="flex flex-col ">
        <ul className="flex flex-row flex-nowrap shrink items-center text-twitter justify-between pt-[15px] text-[15px] cursor-pointer border-b border-outline">
            <li className="FeedMenuItem group"><span className="group-active:border-twitter">Twetts</span></li>
            <li className="FeedMenuItem group"><span className="group-active:border-twitter">Twetts e respostas</span></li>
            <li className="FeedMenuItem group"><span className="group-active:border-twitter">Mídia</span></li>
            <li className="FeedMenuItem group"><span className="group-active:border-twitter">Curtidas</span></li>
        </ul>

        <div className="flex flex-col shrink-0">
            <Tweet nickname="caze" name="@Casimiro" date="23 de Jun" content="Simplesmente o maior do Entretenimento" />
            <Tweet nickname="Rocketseat" name="@Rocketseat" date="2 de Jun" content="Foguete não tem ré" />
            <Tweet nickname="Teste" name="@teste" date="23 de Jun" content="Teste" />
        </div>

    </div>
  )
}
