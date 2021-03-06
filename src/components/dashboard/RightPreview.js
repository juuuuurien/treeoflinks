import Link from "next/link";
import React from "react";

import { ShareIcon } from "@heroicons/react/outline";
import Profile from "../[profile]/Profile";

const PVLinkTab = ({ children, url }) => {
  return (
    <a href={url} target="_new">
      <div className="flex bg-gray-800 rounded-xl justify-center items-center text-center text-white text-xs font-semibold w-full py-3.5 px-6 hover:scale-[1.05] transition-all ease-[cubic-bezier(.11,-0.85,.75,1.83)]">
        {children}
      </div>
    </a>
  );
};

const RightPreview = ({ userdata, linkData, profileData }) => {
  const { username, profile } = userdata;
  const links = linkData;
  return (
    <div className="flex flex-col items-center max-w-[33%] w-full h-auto bg-gray-100 border border-gray-200 z-10">
      <div className="flex flex-row gap-2 w-full p-3 bg-white">
        <h3 className="text-sm">My Treeoflinks:</h3>
        <span className="text-sm visited:text-blue-600">
          <Link
            href={`https://treeoflinks.me/${username}`}
          >{`https://treeoflinks.me/${username}`}</Link>
        </span>
      </div>
      <div className="flex justify-center items-center h-full w-full">
        {/* <iframe
          src="https://sgcsid.sse.codesandbox.io/juuuuurien"
          title="iframe-test"
          className="PHONE-WRAPPER flex flex-col h-[480px] w-[225px] lg:h-[740px] lg:w-[354px] items-center p-0 border-[1.25rem] bg-white border-slate-900 rounded-[4rem] "

          // className="PHONE-WRAPPER flex flex-col h-[34rem] w-[17rem] items-center p-0 border-[.9rem] bg-white border-slate-900 rounded-[2.5rem] "
        /> */}

        <div className="PHONE-WRAPPER flex flex-col h-[34rem] w-[17rem] items-center p-2 border-[.9rem] bg-white border-slate-900 rounded-[2.5rem]">
          <div className="flex flex-row w-full">
            <ShareIcon
              onClick={() => {}}
              className="flex justify-center items-center h-8 w-8 self-end bg-slate-300 p-2 rounded-[100%] text-slate-800 hover:text-slate-400 cursor-pointer"
            />
          </div>
          <div className="PORTFOLIO-WRAPPER flex flex-col items-center m-5">
            <div className="flex bg-gray-600 w-[4rem] h-[4rem] mb-3 rounded-[100%] justify-center items-center">
              <h1>JL</h1>
            </div>
            <span className="font-bold text-sm">{profileData?.title}</span>
            <span className="text-xs">{profileData?.bio}</span>
          </div>
          <div className="LINKS-WRAPPER flex flex-col w-[90%] gap-2">
            {links?.map((e) => {
              if (!e.url || !e.title) return;
              return (
                <PVLinkTab url={e.url} key={e.title}>
                  <span>{e.title}</span>
                </PVLinkTab>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightPreview;
