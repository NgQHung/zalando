import React from "react";
import styled from "styled-components";

const HOME_TOPIC = () => {
  React.useEffect(() => {
    document.getElementsByTagName("img-topic")[0]?.classList?.add("js-user-action");
  });

  return (
    <div className=" mt-[36px] px-[24px] flex flex-wrap md:flex-nowrap justify-between w-full ">
      <div className=" basis-[41.777%] grow pb-6">
        <p className="text-[32px] font-[700] leading-[2.25rem]">Klasické tenisky</p>
        <p className="text_tiempos text-[32px] font-[400] leading-[2.25rem]">Objevte nadčasové modely</p>
        <p className="text-[16px] pt-[24px] leading-[1.5rem] font-[700]">Zobrazit víc</p>
      </div>
      <div className="basis-[58.333%] grow">
        <div className="max-w-[700px] min-w-[540px]">
          <div className="img-topic">
            {/* <img
              className="img-topic h-full w-full object-cover"
              src="Skeleton-img.png"
              lazy-src="Img-topic-1.png"
              alt="topic"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

// const ImgTopic = styled.div`
//   img-topic.js-user-action .topic {
//     background-image: url("Img-topic-1.png");
//   }
//   .topic {
//     background: linear-gradient(140deg, #004990e6, #00499057);
//   }
// `;

export default HOME_TOPIC;
