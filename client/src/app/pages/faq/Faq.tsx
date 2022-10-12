import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faq_data } from "../../../utils/data/mobile/faq";
import Container from "../../components/layouts/container";

const Faq = () => {
  const mostQuestionsIndex = faq_data.findIndex((item) => item.title === "mostQuestions");
  const topicQuestionsIndex = faq_data.findIndex((item) => item.title === "topicQuestions");
  const mostQuestions = faq_data[mostQuestionsIndex];
  const topicQuestions = faq_data[topicQuestionsIndex];

  return (
    <Container bg_color="">
      <div className="px-[18px] md:px-[24px]">
        <div className="faq_title text-[28px] leading-9 font-[700] my-3 ">
          Dobrý den,
          <br />
          jak vám můžeme pomoci?
        </div>
        <div className="faq_content text-[16px] font-[400] tracking-[-0.16px] leading-6 flex flex-wrap ">
          Zde najdete pomoc snadno a rychle. Můžete sledovat, zrušit nebo vrátit vaše objednávky. Naleznete tady také
          odpovědi na mnoho otázek.
        </div>
        <div className="faq_questions-common mt-[30px] border-b border-[#dddd] ">
          <div className="mr-[16px] mb-[18px]">
            <div className="faq_questions-common-title text-[20px] font-bold leading-[22.6px]">Nejčastější dotazy</div>
            <ul className="faq_questions_list mt-[16px] flex flex-col md:flex-row md:flex-wrap leading-[24px] ">
              {mostQuestions.data.map((question: any, idx) => (
                <li key={idx} className="text-[16px] mb-[16px] md:basis-1/2 ">
                  <span className="affect_text font-[700]">{question}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="faq_questions-own text-[16px] border-b border-[#dddd] my-[10px]  ">
          <div className="mb-10 flex flex-col xs:justify-center xs:items-center xs:flex-row  ">
            <div className=" basis-full xs:basis-1/2 leading-[24px]">
              <div className="faq_questions-own-title font-bold">Máte konkrétní dotaz?</div>
              <div className="faq_questions-own-content ">Pokud se přihlásíte, můžeme vám pomoci rychleji.</div>
            </div>
            <div className="faq_questions-own-btn text-[#ffff] text-center flex basis-full xs:basis-1/2">
              <button className="p-3 w-[70%] inline-flex justify-center items-center self-center  bg-[#1a1a1a]">
                <span className="leading-6">Přihlásit se</span>
              </button>
            </div>
          </div>
        </div>
        {/* question topic for mobile start */}
        <div className="faq_questions-topic ">
          <div className="faq_question-topic-title text-[22px] font-bold border-b border-[#dddd] md:border-none">
            <span className="my-10 inline-block">Procházet odpovědi podle tématu</span>
          </div>
          <div className="md:flex md:flex-wrap">
            {topicQuestions.data.map((item: any, idx) => (
              <button
                key={idx}
                className=" w-full md:basis-1/2 text-left border-b border-[#dddd] md:border-none md:cursor-default md:mb-[60px] md:self-start "
              >
                {/* <div>{item.icon}</div> */}
                <img className="hidden md:block px-2" src={item.imgUrl} alt={item.title} />
                <span className="text-[20px] md:text-[32px] inline-block py-[15px] font-[700] md:pt-6 md:pb-[28px] md:leading-[28px] lg:leading-[32px] md:tracking-[-0.16px] md:px-2">
                  {item.title}
                </span>
                <ul className="hidden md:block">
                  {item.questions.map((question: any, inx: any) => (
                    <li key={inx} className="font-[700] mb-4">
                      <span className="affect_text">{question}</span>
                    </li>
                  ))}
                  <li className="font-[700] mb-4">
                    <span className="affect_text">Zobrazit více</span>
                  </li>
                </ul>
              </button>
            ))}
            <div className="">
              <button className=" w-full md:basis-1/2 text-left border-b border-[#dddd] md:border-none md:cursor-default md:mb-[60px] ">
                <span className="text-[20px] md:text-[32px] inline-block py-[15px] font-[700] md:pt-6 md:pb-[28px] md:leading-[28px] lg:leading-[32px] md:tracking-[-0.16px] md:px-2">
                  Další
                </span>
                <FontAwesomeIcon
                  className=" md:hidden object-cover px-4                                                                                       "
                  icon={faChevronRight}
                />
                <ul className="hidden md:block">
                  <li className="font-[700] mb-4">
                    <span className="affect_text">Kde je má objednávka?</span>
                  </li>
                  <li className="font-[700] mb-4">
                    <span className="affect_text">Uplatněte váš dárkový poukaz</span>
                  </li>
                  <li className="font-[700] mb-4">
                    <span className="affect_text">Změnit doručovací adresu</span>
                  </li>
                </ul>
              </button>
            </div>
          </div>
        </div>
        {/* question topic for mobile end */}
        {/* question topic for screen start */}
        <div></div>
        {/* question topic for screen end */}

        {/* </div> */}
      </div>
    </Container>
  );
};

export default Faq;
