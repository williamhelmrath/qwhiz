import React, { useState, useEffect } from "react";
import { Main, Heading, Anchor } from "grommet";
import firebase from "../../utils/firebase";

const db = firebase.firestore();

export default function Feed() {
  const [quizzes, setQuizzes] = useState();

  useEffect(() => {
    db.collection("quizzes")
      .get()
      .then((res) => {
        setQuizzes(
          res.docs.map((doc) => ({ id: doc.id, title: doc.data().title }))
        );
      });
  }, []);

  if (!quizzes) return <div></div>;

  return (
    <Main>
      <Heading>Popular Quizzes</Heading>
      {quizzes.map((quiz) => (
        <QuizLink title={quiz.title} id={quiz.id} key={quiz.id} />
      ))}
    </Main>
  );
}

const QuizLink = ({ title, id }) => {
  return <Anchor label={title} href={`/quiz/${id}`} />;
};
