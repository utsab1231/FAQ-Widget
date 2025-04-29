import { useEffect, useState } from "react";
import { FAQ, FAQWidgetProps } from "../../types/components.types";
import FAQItem from "./FAQItem";

const FAQWidget: React.FC<FAQWidgetProps> = ({
  faqs,
  categories,
  defaultCategory = "General",
  theme = "light",
  title = "FAQs",
}) => {
  const [activeCategory, setActiveCategory] = useState<string>(defaultCategory);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredFAQs, setFilteredFAQs] = useState<FAQ[]>([]);

  useEffect(() => {
    setFilteredFAQs(
      faqs
        .filter((faq) => faq.category === activeCategory)
        .filter((faq) =>
          faq.question.toLowerCase().includes(searchQuery.toLowerCase())
        )
    );
  }, [searchQuery, activeCategory, faqs]);

  const themeClass =
    theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black";
  return (
    <div className={`max-w-xl mx-auto ${themeClass} p-4 rounded-lg`}>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <input
        type="text"
        placeholder="Search FAQs"
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
      <div>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className="px-4 py-2 mx-2 my-2 bg-blue-500 text-white rounded"
          >
            {category}
          </button>
        ))}
      </div>
      {filteredFAQs.length > 0 ? (
        filteredFAQs.map((faq, index) => (
          <FAQItem key={index} id={index} {...faq} />
        ))
      ) : (
        <p>No FAQs found for this category.</p>
      )}
    </div>
  );
};

export default FAQWidget;
