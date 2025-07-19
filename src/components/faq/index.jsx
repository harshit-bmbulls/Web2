// export default Faq;

"use client";
import React, { useState } from "react";
import PlusIcon from "../../../public/plus.png";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { TextAnimate } from "../TextAnimater";

const faqs = [
  {
    question: "How long does it take to see results?",
    answer:
      "Most clients see prospects engaging more within 2 weeks of getting their case studies, but the real magic happens when your proof-backed stories start converting skeptics at the 4-6 week mark. We deliver immediate credibility with long-term conversion power that keeps working for you. Think of it as front-loading your sales process with narrative-driven structure - prospects come already believing you can deliver. ",
  },
  {
    question: "Do you offer refunds? ",
    answer:
      "No refunds once we start work. We're that confident in our process built by conversion copywriters and B2B storytellers, and frankly, we've never had anyone ask for one. Our track record speaks louder than guarantees. We design case studies to close, not just impress, and our clients typically see results that far exceed what they paid. Money-back guarantees are for agencies that aren't sure about their results. ",
  },
  {
    question: "Do I need to provide client information?  ",
    answer:
      "Nope. We handle the strategy, research, and writing. You provide the basic client details and outcomes during our strategy call, and we transform boring facts into conversion weapons. Like you wrote it, but with better results. We dig deep during our strategy session to capture your voice and expertise, so the final case studies sound authentically you, just way more persuasive. ",
  },
  {
    question: "What if my industry is 'boring'? ",
    answer:
      "Boring industries are our specialty. We've made accountants sound exciting and made compliance consultants generate leads. Every industry has compelling transformation stories once you know the proof mechanics, most agencies just don't know how to find them. The 'boring' label usually means there's less competition for attention, which makes it easier to stand out once you know how to show how you work and why it works with narrative-driven structure. ",
  },
  {
    question: "Do you offer refunds?  ",
    answer:
      "If you don't see measurable results within 30 days of implementation, we'll provide one month of the promised free service to optimize and troubleshoot until you do. We're that confident in our process and track record. Frankly, we've never had to extend this offer because the results speak for themselves, but we stand behind our work completely.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-black text-white z-20">
      {/* Header Section */}
      <div className="border-b border-[#5f5f7138] h-36 w-full pb-8">
        <div className="max-w-[1184px] h-36 mx-auto  border-[#5f5f7138]"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1184px] mx-auto border-l border-r border-[#5f5f7138]">
        {/* Title Section */}
        <div className="flex justify-between">
          <div className="p-4 border-r border-[#5f5f7138] w-full">
            <div className="text-[#F5F5F5] text-[48px] opacity-60">
              <TextAnimate as="h1" animation="blurInUp" by="word" once>
                FAQ
              </TextAnimate>
            </div>
            <div className="opacity-60 text-[#D5D5D5] text-[16px] mt-3">
              <TextAnimate as="p" animation="blurInUp" by="word" once>
                Find everything you need to know about Content
              </TextAnimate>
            </div>
          </div>
          <div className="w-98 relative flex">
              <button className="text-[#00FFB2]   w-full cursor-pointer border-t  border-[#5f5f7138] p-4 hover:bg-[#080a09] absolute bottom-0  pl-12 font-normal text-[18px] flex items-center">
                Call Now
                <ArrowUpRight size={24} />
              </button>
          </div>
        </div>

        {/* FAQ Section - Updated layout */}
        <div className="flex flex-wrap border-t border-[#5f5f7138] cursor-pointer ">
          {faqs.map((faq, index) => (
            <div
              key={index}
              onClick={() => toggleFAQ(index)}
              className="w-full md:w-1/2 border-b border-r border-l border-[#5f5f7138] p-6 h-fit"
            >
              <div className="flex justify-between items-start ">
                <div className="text-[#F5F5F5] text-[17px] font-medium">
                  {faq.question}
                </div>
                <motion.img
                  src={PlusIcon.src}
                  alt="toggle icon"
                  width={20}
                  height={20}
                  className="ml-4 mt-1"
                  initial={false}
                  animate={{
                    rotate: openIndex === index ? 45 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </div>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key={`faq-answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <motion.div
                      initial={{ y: -130, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -10, opacity: 0 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                      <p className="text-[#D5D5D5] text-[16px] font-normal leading-[1.8]">
                        {faq.answer}
                      </p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Spacing */}
      <div className="border-y relative border-[#202026] h-[160px] w-full">
        <div className="max-w-[1184px] w-full h-full mx-auto border-x border-[#202026]" />
      </div>
    </div>
  );
};

export default FAQ;
