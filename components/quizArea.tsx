'use client';
import { useState } from "react";
import { Separator } from "./ui/separator";

export default function QuizArea() {
  const [mcqQuestion, setMcqQuestion] = useState(1);
  const [short1Question, setShort1Question] = useState(1);
  const [short2Question, setShort2Question] = useState(1);

  const getProgressPercent = (question: number) => (question / 10) * 100;

  const renderProgressSection = (
    title: string,
    description: string,
    value: number,
    setValue: React.Dispatch<React.SetStateAction<number>>
  ) => (
    <div className="text-xl p-6">
      <div>{title}</div>
      <p className="text-gray-400 text-l">{description}</p>

      <div className="relative w-full h-4 bg-gray-200 rounded-full mt-4">
        <div
          className="absolute top-0 left-0 h-4 bg-blue-500 rounded-full transition-all duration-300"
          style={{ width: `${getProgressPercent(value)}%` }}
        ></div>
        <input
          type="range"
          min="1"
          max="10"
          step="1"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="absolute w-full h-4 opacity-0 cursor-pointer"
        />
      </div>
      <div className="mt-2 text-sm text-gray-500">{value} of 10</div>
    </div>
  );

  return (
    <div className="bg-white w-auto p-14 mt-14 h-auto m-40 border-3 border-gray-300 text-2xl rounded-lg shadow-md">
      <div>
        Quiz Selection Area
        <div className="p-2">
          <Separator />
        </div>

        {renderProgressSection("Multiple Choice Question", "Question with multiple choice", mcqQuestion, setMcqQuestion)}

        {renderProgressSection("Short Answer Questions", "Questions requiring brief text responses", short1Question, setShort1Question)}

        {renderProgressSection("Long Answer Questions", "Questions requiring detailed explanations", short2Question, setShort2Question)}
      </div>
    </div>
  );
}
