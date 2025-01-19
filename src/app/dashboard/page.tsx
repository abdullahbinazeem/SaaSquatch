import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Header } from "../header";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FCFCFC]">
      <div className="flex-1 flex flex-col items-center justify-center">
        <Header />
        <div className="mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-10"></div>
      </div>
    </div>
  );
}
