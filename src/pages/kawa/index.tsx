import { type NextPage } from "next";
import React from "react";
import Footer from "~/modules/footer";

const Page: NextPage = () => {
  return (
    <React.Fragment>
      <div className="flex h-screen flex-col">
        <div className="flex justify-center">
          <div className="w-full max-w-2xl py-8">
            <h1 className="text-3xl">Kawa</h1>
            <p className="mt-6 text-neutral-400">
              Stream anime through torrents on a Mac/Linux/Windows app. Powered
              by Electron and WebTorrent. Planning for AndroidTV and mobile.
            </p>
          </div>
        </div>
        <div className="flex flex-grow items-end">
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Page;
