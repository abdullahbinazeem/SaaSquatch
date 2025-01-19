import { createContext, useContext, useState } from "react";

type QuizData = {
  design: String;
  asset: String;
  integrate: String;
  placement: String;
  launch: String;
  track: String;
};

const QuizDataContext = createContext<QuizData | undefined>(undefined);
