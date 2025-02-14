import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Header } from "./header";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FCFCFC]">
      <div className="flex-1 flex flex-col items-center justify-center">
        <Header />
        <div className="mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-10">
          <div className="relative w-[240px]  lg:w-[500px] aspect-square mb-8 lg:mb-0">
            <Image src="/hero.gif" fill alt="Hero" className="object-cover" />
          </div>
          <div className="flex flex-col items-center gap-y-8">
            <h1 className="text-xl lg:text-3xl font-bold text-neutral-800  text-center">
              Demo how our Referral System Works,
              <br /> and 5x your Referrals today!
            </h1>
            <div className="mt-4 flex flex-col items-center gap-y-3 max-w-[330px] w-full">
              <a href="/demo" className="w-full  animate-bounce">
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full hover:scale-105 transition-all "
                >
                  Start Demo!
                </Button>
              </a>
              <a
                href="https://www.saasquatch.com/request-demo"
                target="_blank"
                className="w-full"
              >
                <Button
                  size="lg"
                  variant="primaryOutline"
                  className="w-full  hover:scale-105 transition-all text-[#686FEF]"
                >
                  Sign me up!
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
