import React from "react";
import Button from "../../components/UI/Button";

const Faq = () => {
  return (
    <div>
      <div className="px-[18px] md:px-[24px]">
        <div className="faq_title text-[28px] leading-9 font-[700] my-3 ">
          Dobrý den,
          <br />
          jak vám můžeme pomoci?
        </div>
        <div className="faq_content text-[16px] font-[400]">
          Zde najdete pomoc snadno a rychle. Můžete sledovat, zrušit nebo vrátit vaše objednávky. Naleznete tady také
          odpovědi na mnoho otázek.
        </div>
        <div className="faq_questions-common mt-[30px] border-b border-[#dddd]">
          <div className="faq_questions-common-title text-[20px] font-bold leading-[22.6px]">Nejčastější dotazy</div>
          <ul className="faq_questions_list mt-[16px] flex flex-col md:flex-row md:flex-wrap ">
            <li className="text-[16px] mb-[16px] md:basis-1/2">
              <span className="affect_text font-bold">Jak obnovit mé heslo?</span>
            </li>
          </ul>
        </div>
        <div className="faq_questions-own text-[16px] border-b border-[#dddd] my-[10px]  ">
          <div className="mb-10 flex flex-col xs:justify-center xs:items-center xs:flex-row  ">
            <div className=" basis-full xs:basis-1/2 leading-[24px]">
              <div className="faq_questions-own-title">Máte konkrétní dotaz?</div>
              <div className="faq_questions-own-content ">Pokud se přihlásíte, můžeme vám pomoci rychleji.</div>
            </div>
            <div className="faq_questions-own-btn text-[#ffff] text-center flex basis-full xs:basis-1/2">
              <button className="p-3 w-[70%] inline-flex justify-center items-center self-center  bg-[#1a1a1a]">
                <span className="leading-6">Přihlásit se</span>
              </button>
            </div>
          </div>
        </div>
        <div className="faq_questions-topic border-b border-[#dddd]">
          <div className="faq_question-topic-title my-10">Procházet odpovědi podle tématu</div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Faq;
