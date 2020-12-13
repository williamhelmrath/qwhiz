import React, { useState } from "react";
import { Box, Heading, Text } from "grommet";

export default function PersonalityQuiz({ quiz }) {
  const [answers, setAnswers] = useState(
    Array(quiz.questions.length).fill(null)
  );
  const [result, setResult] = useState();

  const handleSubmit = () => {
    if (answers.includes(null)) alert("Please answer all of the questions.");
    else {
      // Set result equal to the corresponding result that was selected the most
      // (In case of a tie, whichever result is first alphabetically will be chosen)
      const sorted = answers.map((ans) => ans.correspondsTo).sort();
      console.log(sorted);
      let mode = sorted[0];
      let maxOccurences = 1;
      let currentOccurences = 1;
      for (let i = 1; i < sorted.length; i++) {
        if (sorted[i] === sorted[i - 1]) {
          currentOccurences++;
        } else {
          if (currentOccurences > maxOccurences) {
            maxOccurences = currentOccurences;
            mode = sorted[i - 1];
          }
          currentOccurences = 1;
        }
      }

      if (currentOccurences > maxOccurences) {
        mode = sorted[sorted.length - 1];
      }
      quiz.results.forEach((result) => {
        if (result.text === mode) setResult(result);
      });
    }
  };

  if (!quiz.questions) return <div>Error</div>;
  return (
    <Box flex align="center">
      <Heading>{quiz.title}</Heading>
      {quiz.questions.map((question, index) => (
        <Question
          question={question}
          key={question.text}
          index={index}
          answers={answers}
          setAnswers={setAnswers}
        />
      ))}
      <Box
        hoverIndicator
        onClick={handleSubmit}
        background="lime"
        pad={{ horizontal: "15px" }}
        round="xsmall"
      >
        <Heading>Get score!</Heading>
      </Box>
      {result && <Result result={result} />}
    </Box>
  );
}

const Question = ({ question, index, answers, setAnswers }) => {
  // const [selectedAnswer, setSelectedAnswer] = useState();

  if (!question.answers) return <div>Error</div>;

  return (
    <Box width={{ max: "600px" }}>
      <Box
        background="tomato"
        pad="small"
        round="xsmall"
        border={{ color: "border", side: "all", size: "medium" }}
      >
        <Heading level={2} textAlign="center">
          {question.text}
        </Heading>
      </Box>
      <Box flex direction="row" wrap justify="center">
        {question.answers.map((answer) => (
          <Answer
            answer={answer}
            key={answer.text}
            answers={answers}
            setAnswers={setAnswers}
            index={index}
          />
        ))}
      </Box>
    </Box>
  );
};

const Answer = ({ answer, answers, setAnswers, index }) => {
  const handleAnswerClick = () => {
    let temp = [...answers];
    temp[index] = answers[index] === answer ? null : answer;
    setAnswers(temp);
  };

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
        answers[index] === answer
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

const Result = ({ result }) => {
  return (
    <Box>
      <Heading level={3}>{`You got: ${result.text}`}</Heading>
      <Text>{result.description}</Text>
    </Box>
  );
};
