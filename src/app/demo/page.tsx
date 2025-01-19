"use client"; // Ensure this code runs in a client-side environment

import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

import Confetti from "react-confetti"; // Confetti effect for celebration
import { useWindowSize } from "react-use"; // Hook to get window dimensions dynamically

import {
  designOptions,
  assetOptions,
  integrateOptions,
  launchOptions,
  placementOptions,
  trackOptions,
} from "./options";

// Enumeration to track the current stage of the quiz
enum STAGE {
  Design = 1, // Step 1: Design the reward structure
  Assets = 2, // Step 2: Build referral assets
  Integrate = 3, // Step 3: Integrate backend systems
  Placement = 4, // Step 4: Place your program
  Launch = 5, // Step 5: Launch and promote
  Track = 6, // Step 6: Track and monitor
  Finalize = 7,
}

// Main quiz component
const page = () => {
  // State for showing confetti animation
  const [showConfetti, setShowConfetti] = useState(false);

  // Get window dimensions for confetti effect
  const { width, height } = useWindowSize();

  // State to track the user's quiz selections
  const [quizData, setQuizData] = useState({
    design: "",
    asset: "",
    integrate: "",
    placement: "",
    launch: "",
    track: "",
  });

  // State to check if an option is selected in the current stage
  const [selected, setSelected] = useState<boolean>(false);

  // Current stage of the quiz
  const [stage, setStage] = useState(STAGE.Design);

  // Navigate back to the previous stage
  const onBack = () => {
    setStage((value) => value - 1);
    setSelected(true); // Reset selected state
  };

  // Navigate to the next stage with a confetti effect
  const onNext = () => {
    setShowConfetti(true); // Show confetti when moving to the next stage
    setSelected(false); // Reset selection state

    setTimeout(() => {
      setShowConfetti(false); // Hide confetti after a short delay
      setStage((value) => value + 1);
    }, 1500); // 1.5-second delay for the transition
  };

  const [randomNumber, setRandomNumber] = useState(0);
  useEffect(() => {
    setRandomNumber(Math.random());
  }, []);

  // Dynamic content for the current stage (Implement Component for this)
  let bodyContent;
  switch (stage) {
    case STAGE.Design:
      bodyContent = (
        <div className="p-4">
          <div>
            <div className="relative w-[240px] mx-auto lg:w-[300px] aspect-square mb-4 lg:mb-0">
              <Image
                src="/quiz/Reward.svg"
                alt="reward"
                className="object-contain"
                fill
              />
            </div>
            <h1 className="text-2xl mb-2 font-bold text-center">
              Structure your reward program!
            </h1>
            <p className="text-md max-w-[750px] text-gray-500">
              Pick your incentive! Decide who you're rewarding and when. Sweeten
              the deal with options like recurring rewards, tiered rewards, and
              time-based offers.
            </p>
          </div>
          <div className="mt-12 m-auto md:grid-cols-2 grid w-full gap-4 gap-x-10 gap-y-10 justify-center">
            {designOptions.map((option, i) => (
              <div
                key={i}
                className={cn(
                  `hover:scale-105 transition-all max-w-80 border-[2px] border-gray-200 rounded-lg px-10  py-4 text-center text-gray-500 hover:bg-slate-50 cursor-pointer`,
                  quizData.design == option.tag
                    ? "bg-[#6DC04B] border-[#6DC04B] hover:bg-[#6DC04B] text-white "
                    : ""
                )}
                onClick={() => {
                  setQuizData((prevState) => ({
                    ...prevState,
                    design: option.tag,
                  }));

                  setSelected(true);
                }}
              >
                {option.summary}
              </div>
            ))}
          </div>
        </div>
      );
      break;
    case STAGE.Assets:
      bodyContent = (
        <div className="p-4">
          <div>
            <div className="relative w-[240px] mx-auto lg:w-[300px] aspect-square mb-4 lg:mb-0">
              <Image
                src="/quiz/Assets.svg"
                alt="Assets"
                className="object-contain"
                fill
              />
            </div>
            <h1 className="text-2xl mb-2 font-bold text-center">
              Boost your Referrals!
            </h1>
            <p className="text-md max-w-[750px] text-gray-500">
              Use our insuite tools to create branded emails, widgets, and
              microsites. Add features like leaderboards to encourage
              competition and boost referrals.
            </p>
          </div>
          <div className="mt-12 m-auto md:grid-cols-2 grid w-full gap-4 gap-x-10 gap-y-10 justify-center">
            {assetOptions.map((option, i) => (
              <div
                key={i}
                className={cn(
                  `hover:scale-105 transition-all max-w-80 border-[2px] border-gray-200 rounded-lg px-10  py-4 text-center text-gray-500 hover:bg-slate-50 cursor-pointer`,
                  quizData.asset == option.tag
                    ? "bg-[#6DC04B] border-[#6DC04B] hover:bg-[#6DC04B] text-white "
                    : ""
                )}
                onClick={() => {
                  setQuizData((prevState) => ({
                    ...prevState,
                    asset: option.tag,
                  }));

                  setSelected(true);
                }}
              >
                {option.summary}
              </div>
            ))}
          </div>
        </div>
      );
      break;
    case STAGE.Integrate:
      bodyContent = (
        <div className="p-4">
          <div>
            <div className="relative w-[240px] mx-auto lg:w-[300px] aspect-square mb-4 lg:mb-0">
              <Image
                src="/quiz/Integrate.svg"
                alt="Integrate"
                className="object-contain"
                fill
              />
            </div>
            <h1 className="text-2xl mb-2 font-bold text-center">
              Decide how to Reward!
            </h1>
            <p className="text-md max-w-[750px] text-gray-500">
              Connect your tools to reward based on events like sign-ups or
              purchases. Ensure automated data flow for rewards fulfillment and
              follow-up
            </p>
          </div>
          <div className="mt-12 m-auto md:grid-cols-2 grid w-full gap-4 gap-x-10 gap-y-10 justify-center">
            {integrateOptions.map((option, i) => (
              <div
                key={i}
                className={cn(
                  `hover:scale-105 transition-all max-w-80 border-[2px] border-gray-200 rounded-lg px-10  py-4 text-center text-gray-500 hover:bg-slate-50 cursor-pointer`,
                  quizData.integrate == option.tag
                    ? "bg-[#6DC04B] border-[#6DC04B] hover:bg-[#6DC04B] text-white "
                    : ""
                )}
                onClick={() => {
                  setQuizData((prevState) => ({
                    ...prevState,
                    integrate: option.tag,
                  }));

                  setSelected(true);
                }}
              >
                {option.summary}
              </div>
            ))}
          </div>
        </div>
      );
      break;
    case STAGE.Placement:
      bodyContent = (
        <div className="p-4">
          <div>
            <div className="relative w-[240px] mx-auto lg:w-[300px] aspect-square mb-4 lg:mb-0">
              <Image
                src="/quiz/Placement.svg"
                alt="Placement"
                className="object-contain"
                fill
              />
            </div>
            <h1 className="text-2xl mb-2 font-bold text-center">
              Place where it Counts!
            </h1>
            <p className="text-md max-w-[750px] text-gray-500">
              Embed your program at key touchpoints. Use post-purchase thank-you
              pages, emails, or website banners to maximize its potential.
            </p>
          </div>
          <div className="mt-12 m-auto md:grid-cols-2 grid w-full gap-4 gap-x-10 gap-y-10 justify-center">
            {placementOptions.map((option, i) => (
              <div
                key={i}
                className={cn(
                  `hover:scale-105 transition-all max-w-80 border-[2px] border-gray-200 rounded-lg px-10  py-4 text-center text-gray-500 hover:bg-slate-50 cursor-pointer`,
                  quizData.placement == option.tag
                    ? "bg-[#6DC04B] border-[#6DC04B] hover:bg-[#6DC04B] text-white "
                    : ""
                )}
                onClick={() => {
                  setQuizData((prevState) => ({
                    ...prevState,
                    placement: option.tag,
                  }));

                  setSelected(true);
                }}
              >
                {option.summary}
              </div>
            ))}
          </div>
        </div>
      );
      break;
    case STAGE.Launch:
      bodyContent = (
        <div className="p-4">
          <div>
            <div className="relative w-[240px] mx-auto lg:w-[300px] aspect-square mb-4 lg:mb-0">
              <Image
                src="/quiz/Launch.svg"
                alt="Placement"
                className="object-contain"
                fill
              />
            </div>
            <h1 className="text-2xl mb-2 font-bold text-center">
              Launch and Earn Your Riches!
            </h1>
            <p className="text-md max-w-[750px] text-gray-500">
              Integrate with business tools and run promotional campaigns using
              referral codes, links, and other assets.
            </p>
          </div>
          <div className="mt-12 m-auto md:grid-cols-2 grid w-full gap-4 gap-x-10 gap-y-10 justify-center">
            {launchOptions.map((option, i) => (
              <div
                key={i}
                className={cn(
                  `hover:scale-105 transition-all max-w-80 border-[2px] border-gray-200 rounded-lg px-10  py-4 text-center text-gray-500 hover:bg-slate-50 cursor-pointer`,
                  quizData.launch == option.tag
                    ? "bg-[#6DC04B] border-[#6DC04B] hover:bg-[#6DC04B] text-white "
                    : ""
                )}
                onClick={() => {
                  setQuizData((prevState) => ({
                    ...prevState,
                    launch: option.tag,
                  }));

                  setSelected(true);
                }}
              >
                {option.summary}
              </div>
            ))}
          </div>
        </div>
      );
      break;
    case STAGE.Track:
      bodyContent = (
        <div className="p-4">
          <div>
            <div className="relative w-[240px] mx-auto lg:w-[300px] aspect-square mb-4 lg:mb-0">
              <Image
                src="/quiz/Track.svg"
                alt="Assets"
                className="object-contain"
                fill
              />
            </div>
            <h1 className="text-2xl mb-2 font-bold text-center">
              Track and Grow your Business!
            </h1>
            <p className="text-md max-w-[750px] text-gray-500">
              Monitor your referral program's performance with analytics.
              Measure engagement, revenue, and success metrics to make
              adjustments.
            </p>
          </div>
          <div className="mt-12 m-auto md:grid-cols-2 grid w-full gap-4 gap-x-10 gap-y-10 justify-center">
            {trackOptions.map((option, i) => (
              <div
                key={i}
                className={cn(
                  `hover:scale-105 transition-all max-w-80 border-[2px] border-gray-200 rounded-lg px-10  py-4 text-center text-gray-500 hover:bg-slate-50 cursor-pointer`,
                  quizData.track == option.tag
                    ? "bg-[#6DC04B] border-[#6DC04B] hover:bg-[#6DC04B] text-white "
                    : ""
                )}
                onClick={() => {
                  setQuizData((prevState) => ({
                    ...prevState,
                    track: option.tag,
                  }));

                  setSelected(true);
                }}
              >
                {option.summary}
              </div>
            ))}
          </div>
        </div>
      );
      break;
    case STAGE.Finalize:
      bodyContent = (
        <div className="p-4 mt-[20vh]">
          <div>
            <h1 className="text-3xl mb-4 font-bold text-center">
              Congrats! You are Now Ready
            </h1>
            <p className="text-lg max-w-[900px] text-gray-400">
              Great job designing your referral program! You've chosen a{" "}
              <span className="font-bold text-green-500">
                {quizData.design}
              </span>{" "}
              structure, paired with{" "}
              <span className="font-bold text-green-500">{quizData.asset}</span>{" "}
              assets to enhance visibility. Your decision to reward referrals
              through{" "}
              <span className="font-bold text-green-500">
                {quizData.integrate}
              </span>{" "}
              ensures a smooth process, while placing the program on{" "}
              <span className="font-bold text-green-500">
                {quizData.placement}
              </span>{" "}
              maximizes customer engagement. By launching with{" "}
              <span className="font-bold text-green-500">
                {quizData.launch}
              </span>{" "}
              and focusing on{" "}
              <span className="font-bold text-green-500">{quizData.track}</span>
              , you've set up a referral strategy that's both impactful and
              results-driven!
            </p>
            <p className="text-lg max-w-[900px] text-gray-400 mt-4">
              Based on our statistics, users like you can see a{" "}
              <span className="font-bold text-green-500">
                {Math.floor(randomNumber * 100) + 100}% increase
              </span>{" "}
              in refferals and{" "}
              <span className="font-bold text-green-500">
                {Math.floor(randomNumber * 50) + 20}% increase
              </span>{" "}
              in revenue generated. Your the perfect candidate for our program,
              so what are you waiting for?
            </p>

            <a href="https://www.saasquatch.com/request-demo" target="_blank">
              <Button
                size="lg"
                variant="secondary"
                className="m-auto block hover:scale-105 transition-all  mt-8"
              >
                Sign Up For a Call Today!
              </Button>
            </a>
          </div>
        </div>
      );
      break;
  }

  return (
    <div className="min-h-screen ">
      {showConfetti && (
        <Confetti
          width={width}
          height={height}
          gravity={0.15}
          tweenDuration={600}
          recycle={false}
          numberOfPieces={400}
        />
      )}
      <div className="flex-1 flex items-center justify-center">
        <div>
          {stage <= 6 && (
            <div className="w-full h-2 bg-gray-200 mt-16 rounded-2xl relative">
              <div
                className="transition-all duration-500 h-full bg-green-500 overflow-hidden rounded-2xl"
                style={{ width: `${(stage / 6) * 100}%` }}
              />
            </div>
          )}
          {bodyContent}
          <div className="flex w-full mt-12 p-4">
            {stage != 6 && (
              <a href="/">
                <Button
                  variant={"secondary"}
                  className="opacity-70 hover:opacity-100 transition-all hover:scale-105"
                >
                  Home
                </Button>
              </a>
            )}
            {stage <= 5 && (
              <Button disabled={!selected} className="ml-auto" onClick={onNext}>
                Next
              </Button>
            )}
            {stage == STAGE.Track && (
              <Button
                disabled={!selected}
                className="ml-auto w-full"
                onClick={onNext}
              >
                Finish Up
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
