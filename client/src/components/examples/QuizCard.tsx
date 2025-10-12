import { QuizCard } from "../QuizCard";

export default function QuizCardExample() {
  return (
    <div className="p-6">
      <QuizCard
        question="Which chamber of the heart receives oxygenated blood from the lungs?"
        options={[
          { id: "a", text: "Right atrium" },
          { id: "b", text: "Left atrium" },
          { id: "c", text: "Right ventricle" },
          { id: "d", text: "Left ventricle" },
        ]}
        correctAnswer="b"
        explanation="The left atrium receives oxygenated blood from the lungs via the pulmonary veins. This blood is then pumped into the left ventricle and distributed to the body."
        onAnswer={(isCorrect) => console.log("Answer correct:", isCorrect)}
      />
    </div>
  );
}
