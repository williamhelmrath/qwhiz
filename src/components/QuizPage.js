import React, { useState, useEffect } from "react";
import firebase from "../utils/firebase";
import { Main } from "grommet";
import Quiz from "./Quiz";

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

  return (
    <Main>
      <Quiz quiz={quiz} />
    </Main>
  );
}
