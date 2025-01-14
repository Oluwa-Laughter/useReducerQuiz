import { useQuiz } from "../contexts/QuizContext";
import Options from "./Options";

function Question() {
  const { curQuestion } = useQuiz();
  return (
    <div>
      <h4>{curQuestion.question}</h4>
      <Options />
    </div>
  );
}

export default Question;
