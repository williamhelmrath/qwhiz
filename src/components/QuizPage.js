import React, { useState, useEffect } from "react";
import firebase from "../utils/firebase";
import Quiz from "./Quiz";

const db = firebase.firestore();

export default function QuizPage({ match }) {
  const [quiz, setQuiz] = useState();

  useEffect(() => {
    db.collection("quizzes")
      .doc(match.params.id)
      .get()
      .then((res) => {
        console.log(res.data());
        setQuiz(res.data());
      });
  }, []);
  if (!quiz) return <div></div>;

  return (
    <div>
      <Quiz quiz={quiz} />
    </div>
  );
}
