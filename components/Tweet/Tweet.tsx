import React from "react";
import {
  DotsHorizontalIcon,
  RefreshIcon,
  ShareIcon,
} from "@heroicons/react/solid";
import { ChatIcon, HeartIcon } from "@heroicons/react/outline";
import Icon from "../Icon/Icon";

interface Props {
  nickname: string;
  name: string;
  date: string;
  content: string;
}

const Tweet: React.FC<Props> = ({ nickname, name, date, content }) => {
  return (
    <section className="flex flex-col py-[14px] px-[16px] border-b border-outline w-full">
      <div className="flex items-center text-[13px] text-gray leading-3" id="retweeted">
        <RefreshIcon className="h-4 w-4 ml-[35px] mr-[9px]" />
        Você retweetou
      </div>

      <div className="flex mt-[1px] relative">
        <div
          id="miniavatar"
          className="w-12 h-12 rounded-[50%] shrink-0 bg-gray absolute top-0 left-0"
        ></div>

        <div className="flex flex-col w-full mt-[2px] pl-[59px]">
          <div className="flex justify-between items-center">
            <div className="flex items-center text-[15px]">
              <strong className="mr-[5px] leading-4	truncate">{name}</strong>
              <span className="text-gray leading-4 truncate">{nickname}</span>
              <div className="w-[2px] leading-4 h-[2px] rounded-[50%] mx-[8px] bg-gray"></div>
              <time className="text-gray truncate"> {date}</time>
            </div>
            <Icon color="hover:text-twitter" bg="group-hover:bg-cyan-400/10">
              <DotsHorizontalIcon className="icon" />
            </Icon>
          </div>
          <p className="mt-[-2px]">{content}</p>

          <div
            className="mt-3 w-full bg-outline rounded-[14px] hover:opacity-70"
            id="image"
          ></div>

          <div
            className="flex items-center justify-between flex-wrap mt-[11px] mr-auto mb-0 w-full sm:w-[87%]"
            id="icons"
          >
            <Icon
              color="hover:text-twitter"
              bg="group-hover:bg-cyan-400/10"
              number="25"
            >
              <ChatIcon className="icon" />
            </Icon>

            <Icon
              color="hover:text-retweet"
              bg="group-hover:bg-green-400/10"
              number="133"
            >
              <RefreshIcon className="icon" />
            </Icon>

            <Icon
              color="hover:text-like"
              bg="group-hover:bg-red-400/10"
              number="1323"
            >
              <HeartIcon className="icon" />
            </Icon>

            <Icon color="hover:text-twitter" bg="group-hover:bg-cyan-400/10">
              <ShareIcon className="icon" />
            </Icon>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tweet;
