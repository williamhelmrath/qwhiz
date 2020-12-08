import React, { useState } from "react";
import { Box, Heading } from "grommet";

export default function Quiz({ quiz }) {
  if (!quiz.questions) return <div>Error</div>;
  return (
    <Box flex align="center">
      <Heading>{quiz.title}</Heading>
      {quiz.questions.map((question) => (
        <Question question={question} key={question.text} />
      ))}
      <Box
        hoverIndicator
        onClick={() => {}}
        background="lime"
        pad={{ horizontal: "15px" }}
        round="xsmall"
      >
        <Heading>Get score!</Heading>
      </Box>
    </Box>
  );
}

const Question = ({ question }) => {
  const [selectedAnswer, setSelectedAnswer] = useState();

  if (!question.answers) return <div>Error</div>;

  return (
    <Box width={{ max: "600px" }}>
      <Box
        background="tomato"
        pad="small"
        round="xsmall"
        border={{ color: "border", side: "all", size: "medium" }}
      >
        <Heading level={2}>{question.text}</Heading>
      </Box>
      <Box flex direction="row" wrap justify="center">
        {question.answers.map((answer) => (
          <Answer
            answer={answer}
            key={answer.text}
            selectedAnswer={selectedAnswer}
            setSelectedAnswer={setSelectedAnswer}
          />
        ))}
      </Box>
    </Box>
  );
};

const Answer = ({ answer, setSelectedAnswer, selectedAnswer }) => {
  const handleAnswerClick = () =>
    selectedAnswer === answer.text
      ? setSelectedAnswer()
      : setSelectedAnswer(answer.text);

  if (!answer.text) return <div>Error</div>;

  return (
    <Box
      width={{ width: "200px" }}
      hoverIndicator
      onClick={handleAnswerClick}
      background="lavender"
      round="small"
      margin={{ vertical: "20px", horizontal: "40px" }}
      border={
        selectedAnswer === answer.text
          ? { color: "green", side: "all", size: "medium" }
          : { color: "violet", side: "all", size: "medium" }
      }
    >
      <Heading level={3} textAlign="center">
        {answer.text}
      </Heading>
    </Box>
  );
};
