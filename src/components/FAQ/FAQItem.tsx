import { useState } from "react";
import { FAQItemProps } from "../../types/components.types";

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, id }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="border-b p-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${id}`}
        className="text-left w-full text-xl font-semibold"
      >
        {question}
      </button>
      {isOpen && (
        <p id={`faq-answer-${id}`} className="mt-2 text-gray-600">
          {answer}
        </p>
      )}
    </div>
  );
};

export default FAQItem;
