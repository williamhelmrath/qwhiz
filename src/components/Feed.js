import React from "react";
import Quiz from "./Quiz";

const quiz = {
  title: "Personality Quiz",
  questions: [
    {
      text: "What is your favorite color?",
      answers: [
        { text: "Red", correspondsTo: "Happy" },
        { text: "Yellow", correspondsTo: "Sad" },
        { text: "Blue", correspondsTo: "Angry" },
      ],
    },
    {
      text: "What is your favorite movie?",
      answers: [
        { text: "Airplane!", correspondsTo: "Sad" },
        { text: "Tarzan", correspondsTo: "Angry" },
        { text: "Pride and Prejudice", correspondsTo: "Happy" },
      ],
    },
  ],
};

export default function Feed() {
  return (
    <div>
      your feed
      <Quiz quiz={quiz} />
    </div>
  );
}
