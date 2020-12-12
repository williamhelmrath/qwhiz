import React, { useState, useEffect } from "react";
import firebase from "../utils/firebase";
import { Main } from "grommet";
import PersonalityQuiz from "./PersonalityQuiz";

const db = firebase.firestore();

export default function QuizPage({ match }) {
  const [quiz, setQuiz] = useState();

  useEffect(() => {
    db.collection("quizzes")
      .doc(match.params.id)
      .get()
      .then((res) => {
        setQuiz(res.data());
      });
  }, [match.params.id]);
  if (!quiz) return <div></div>;

  if (quiz.type === "personality")
    return (
      <Main>
        <PersonalityQuiz quiz={quiz} />
      </Main>
    );

  return <div>Error</div>;
}
