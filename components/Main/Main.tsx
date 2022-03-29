import {
  ArrowLeftIcon,
  BellIcon,
  HomeIcon,
  MailIcon,
  SearchIcon,
} from "@heroicons/react/solid";
import ProfilePage from "../ProfilePage/ProfilePage";

const Main = () => {
  return (
    <main
      className="flex flex-col vsm:border-x border-solid border-outline "
      id="main"
    >
      <header className="z-10 sticky top-0 bg-primary flex items-center text-left pt-2 pr-0 pb-2 pl-3 border-b border-solid border-outline">
        <button className=" p-2 rounded-[50%] outline-0	cursor-pointer hover:bg-twitterDarkHover ">
          <ArrowLeftIcon className="w-[31px] h-[31px] cursor-pointer fill-gray hover:fill-twitter active:fill-twitter" />
        </button>

        <div className="ml-4 flex flex-col">
          <strong className="text-xl">Micael Souza</strong>
          <span className="text-base text-gray">69 Tweets</span>
        </div>
      </header>

      <ProfilePage />

      <div
        className="fixed bottom-0 left-0 z-10 bg-primary w-full border-t border-solid border-outline flex justify-between vsm:hidden"
        id="bottomMenu"
      >
        <HomeIcon className="icon" />
        <SearchIcon className="icon" />
        <BellIcon className="icon" />
        <MailIcon className="icon" />
      </div>
    </main>
  );
};

export default Main;
