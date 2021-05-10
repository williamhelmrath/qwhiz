import React, { useState } from "react";
import { Main, Form, FormField, TextInput, Select, Button } from "grommet";

export default function PostPage() {
  const [title, setTitle] = useState("");
  const [questions, setQuestions] = useState(["aa"]);
  const [type, setType] = useState("");
  const [errors, setErrors] = useState({ title: "", questions: [], type: "" });
  const handleSubmit = async () => {
    console.log(title, questions, type);
  };

  return (
    <Main>
      <Form onSubmit={handleSubmit}>
        <FormField error={errors.title}>
          <TextInput name="title" onChange={(e) => setTitle(e.target.value)} />
        </FormField>
        <FormField error={errors.type}>
          <Select
            options={["personality", "correct"]}
            onChange={({ option }) => setType(option)}
          />
        </FormField>

        <Button
          type="submit"
          label="Publish"
          disabled={title === "" || type === "" || questions.length === 0}
        />
      </Form>
    </Main>
  );
}
