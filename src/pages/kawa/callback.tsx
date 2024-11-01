import { type NextPage } from "next";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import Footer from "~/modules/footer";

const Page: NextPage = () => {
  const searchParams = useSearchParams();

  useEffect(() => {
    const code = searchParams.get("code");

    if (code) {
      window.open(`kawa://mal-auth?code=${code}`, "_self");
    }
  }, [searchParams]);

  return (
    <React.Fragment>
      <div className="flex h-screen flex-col">
        <div className="flex justify-center">
          <div className="w-full max-w-2xl py-8">
            <h1 className="text-3xl">{"You're authorized on kawa!"}</h1>
            <p className="mt-6 text-neutral-400">
              You may close this window now.
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
