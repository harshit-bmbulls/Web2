"use client";

import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";
import { TextAnimate } from "../TextAnimater";
import { useRef } from "react";

// Inside your component:

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const heading = useMemo(
    () => (
      <TextAnimate
        once
        as="h2"
        by="word"
        animation="blurInUp"
        highlightedWords={["FAQ"]}
        delay={0.075}
        duration={0.5}
        className="inline-block text-center text-[31px] xs:text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px]  tracking-tighter text-[#f87a0a] whitespace-normal md:whitespace-nowrap"
      >
        FAQ
      </TextAnimate>
    ),
    []
  );

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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

  return (
    <section className="items-center flex flex-col gap-[50px] justify-center overflow-visible relative w-full py-[25px] px-2.5 ">
      <div className="flex items-center flex-col gap-2.5">{heading}</div>
      <div className="relative w-[340px] md:w-[800px] z-[1]">
        <div className="flex items-center flex-col gap-4 justify-center relative w-full">
          {faqs.map((faq, index) => {
            return (
              <div
                key={index}
                onClick={() => toggleFAQ(index)}
                className="border border-white/10 bg-[#ffffff04] rounded-3xl backdrop-blur-[20px] items-start cursor-pointer flex flex-none flex-col flex-nowrap gap-6 justify-start overflow-hidden relative w-full z-[1] px-5 py-[18px]  "
              >
                {/* question */}
                <div className="items-center flex flex-none flex-row flex-nowrap gap-6 justify-start relative w-full">
                  <div className="flex-1 relative select-none whitespace-pre-wrap">
                    <p className="font-medium text-white -tracking-[0.02em] text-base">
                      {faq.question}
                    </p>
                  </div>
                  <div className="flex-none h-3 w-3 flex items-center justify-center cursor-pointer ">
                    {openIndex === index ? (
                      <svg width="16" height="16" viewBox="0 0 16 16">
                        <rect
                          x="3"
                          y="7.25"
                          width="10"
                          height="1.5"
                          rx="0.75"
                          fill="#FCFCFA"
                        />
                      </svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 16 16">
                        <rect
                          x="3"
                          y="7.25"
                          width="10"
                          height="1.5"
                          rx="0.75"
                          fill="#FCFCFA"
                        />
                        <rect
                          x="7.25"
                          y="3"
                          width="1.5"
                          height="10"
                          rx="0.75"
                          fill="#FCFCFA"
                        />
                      </svg>
                    )}
                  </div>
                </div>
                {/* description */}
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      key={`faq-${index}`}
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: "auto", opacity: 1, marginTop: 12 }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      transition={{ duration: 0.3, ease: [0.7, 0, 0.3, 1] }}
                      className="overflow-hidden w-full"
                    >
                      <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="text-white/75 leading-5 tracking-[-0.01em] inline-block">
                          {faq.answer}
                        </p>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
