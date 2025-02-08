import { fetchAnswers, fetchQuestion } from "@/lib/data";
import { HashtagIcon } from "@heroicons/react/24/outline";
import { Answer } from "@/components/Answer";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const question = await fetchQuestion(id);
    const answers = await fetchAnswers(id);
    return (
        <div>
            <h1 className="text-3xl font-black flex items-center">
                <HashtagIcon className="h-6 w-6 mr-2" /> {question[0].title}
            </h1>
            {answers.map((answer) => (
                <Answer
                    key={answer.id}
                    id={answer.id}
                    answer={answer.answer}
                    question_id={answer.question_id}
                />
            ))}
        </div>
    )
}