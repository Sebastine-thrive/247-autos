import React from "react";
import FaqItem from "./FaqItem";
import { FaqItemProps } from "./FaqProps";

const faqData: FaqItemProps[] = [
  {
    question: "What does 247 Autos represent?",
    answer:
      "247 autos exists as a service point for everything autos. From importation,sales, servicing,alignment etc. It also exists to make car sales and buying an easy business for anyone interested.",
  },
  {
    question: "Is 247 Autos only concerned with car sales?",
    answer:
      "No. We also render importation services, technical services and general auto consultations",
  },
  {
    question: "Can I sell my car with 247 Autos?",
    answer:
      "Yes, you can. You have to pass through the required process in order to ascertain the state and quality of the car. All within the quality assurance terms and conditions of the company.",
  },
  {
    question: "Are the prices displayed for the cars negotiable?",
    answer:
      "No, they are not. We ensure that the prices are fair enough and better than most out there.",
  },
  {
    question: "Can a vehicle returned after purchase?",
    answer:
      "Once a vehicle has been tested and purchased in good condition, it cannot be returned.",
  },
];

const FaqComponent: React.FC = () => {
  return (
    <div className="faq flex flex-col text-center gap-2 w-full lg:w-[70%] m-auto">
      <h2 className="text-2xl font-bold mb-4"> Often Asked Questions</h2>
      <div className="accordion text-center">
        {faqData.map((item, index) => (
          <FaqItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
};

export default FaqComponent;
