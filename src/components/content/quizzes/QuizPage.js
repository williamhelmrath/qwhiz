import React, { useState, useEffect } from "react";
import firebase from "../../../utils/firebase";
import { Main } from "grommet";
import PersonalityQuiz from "./PersonalityQuiz";
import { Error } from "../../error";

const db = firebase.firestore();

export default function QuizPage({ match }) {
  const [quiz, setQuiz] = useState();

  useEffect(() => {
    db.collection("quizzes")
      .doc(match.params.id)
      .get()
      .then((res) => {
        if (!res.data()) setQuiz("error");
        else setQuiz(res.data());
      })
      .catch((error) => {
        console.log(error);
      });
  }, [match.params.id]);
  if (!quiz) return <div></div>;

  if (quiz === "error") return <Error />;

  if (quiz.type === "personality")
    return (
      <Main>
        <PersonalityQuiz quiz={quiz} />
      </Main>
    );

  return <div>Error</div>;
}
