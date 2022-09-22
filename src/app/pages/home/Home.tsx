import React, { Fragment } from "react";
import { DATA_IMAGES } from "../../../utils/data-img";
import Content from "../../components/layouts/container";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faHeart } from "@fortawesome/free-solid-svg-icons";
// import {}

export const Home = () => {
  // const [zenyDataImages, setZenyDataImage] = useState([])
  const zenyDataImages_1 = DATA_IMAGES.filter((item) => item.title === "Zeny_1");
  const zenyDataImages_2 = DATA_IMAGES.filter((item) => item.title === "Zeny_2");

  return (
    <Fragment>
      <Content bg_color="bg-[#229967] ">
        <div className="pt-[24px] flex justify-between w-full ">
          <div className="mt-[36px] px-[8px]">
            <p className="text-[32px] font-[700] leading-[2.25rem]">Klasické tenisky</p>
            <p className="text_tiempos text-[32px] font-[400] leading-[2.25rem]">Objevte nadčasové modely</p>
            <p className="text-[16px] pt-[24px] leading-[1.5rem] font-[700]">Zobrazit víc</p>
          </div>
          <div>
            <img
              src="https://img01.ztat.net/banner/a115499feaab412b8690d8e381f92b93/980c2102f2ea439eae997c678faf6158.jpg?imwidth=693"
              alt="img"
            />
          </div>
        </div>
      </Content>
      {/* <Content bg_color="bg-[#34d27b]"> */}
      <div className="scrollbar_hidden relative h-[584px] w-full overflow-x-auto bg-[#34d27b] mb-[64px]">
        <div className="absolute pt-[36px] pb-[24px] text-[14px] ">
          {zenyDataImages_1.map((item, idx) => (
            <div key={idx} className="">
              <ul className="flex ">
                {item.image.map((image, index) => (
                  <li key={index} className="relative product_item h-[415px] w-[296px] px-[8px]">
                    <div className="absolute bg-[#ffff] top-2 right-2 ">
                      <FontAwesomeIcon icon={faHeart} className="fa-thin p-[8px] text-[24px]" />
                    </div>
                    <img className="h-full w-full object-cover" src={image} alt="product" />
                  </li>
                ))}
              </ul>
              <div className="flex ml-[152px] pt-[8px]">
                {item.info.map((item, idx) => (
                  <div key={idx} className="w-[296px] px-[8px] leading-[20px]">
                    <div className="pb-[8px]">
                      <h3>{item.brand}</h3>
                      <h3>{item.name}</h3>
                    </div>
                    <div className="flex flex-col leading-[1.25rem] text-[700]">
                      <span>{item.price}</span>
                      <div className="text-[12px] leading-[16px]">
                        <span>Původně:</span>
                        <span>{item.originalPrice}</span>
                        <span>20%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bg-[#ffff] right-[152px] top-1/2 translate-y-[-50%]">
          <FontAwesomeIcon icon={faArrowRight} className="p-2 text-[24px]" />
        </div>
      </div>
      {/* </Content> */}
      <Content bg_color="bg-[#a3a505]">
        <div>
          <p>Klasické tenisky</p>
          <p>Objevte nadčasové modely</p>
          <p>Zobrazit víc</p>
        </div>
        <div>
          <img
            src="https://img01.ztat.net/banner/2ffaef1e9c5545298c91ea007fda1035/ecf3897947c34b88b3183c28a68638d6.jpg?imwidth=512"
            alt="img"
          />
        </div>
      </Content>
      <div className="scrollbar_hidden relative h-[584px] w-full overflow-x-auto bg-[#e3e707] mb-[64px]">
        <div className="absolute pt-[36px] pb-[24px] text-[14px] ">
          {zenyDataImages_2.map((item, idx) => (
            <div key={idx} className="">
              <ul className="flex ">
                {item.image.map((image, index) => (
                  <li key={index} className="relative product_item h-[415px] w-[296px] px-[8px]">
                    <div className="absolute bg-[#ffff] top-2 right-2 ">
                      <FontAwesomeIcon icon={faHeart} className="fa-thin p-[8px] text-[24px]" />
                    </div>
                    <img className="h-full w-full object-cover" src={image} alt="product" />
                  </li>
                ))}
              </ul>
              <div className="flex ml-[152px] pt-[8px]">
                {item.info.map((item, idx) => (
                  <div key={idx} className="w-[296px] px-[8px] leading-[20px]">
                    <div className="pb-[8px]">
                      <h3>{item.brand}</h3>
                      <h3>{item.name}</h3>
                    </div>
                    <div className="flex flex-col leading-[1.25rem] text-[700]">
                      <span>{item.price}</span>
                      <div className="text-[12px] leading-[16px]">
                        <span>Původně:</span>
                        <span>{item.originalPrice}</span>
                        <span>20%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bg-[#ffff] right-[152px] top-1/2 translate-y-[-50%]">
          <FontAwesomeIcon icon={faArrowRight} className="p-2 text-[24px]" />
        </div>
      </div>
      {/* <Content bg_color="bg-[#38b8e7]">
        <div>
          <p>Klasické tenisky</p>
          <p>Objevte nadčasové modely</p>
          <p>Zobrazit víc</p>
        </div>
        <div>
          <img
            src="https://img01.ztat.net/banner/a115499feaab412b8690d8e381f92b93/980c2102f2ea439eae997c678faf6158.jpg?imwidth=693"
            alt="img"
          />
        </div>
      </Content>
      <Content bg_color="bg-[#ffff]">
        <div>
          <p>Klasické tenisky</p>
          <p>Objevte nadčasové modely</p>
          <p>Zobrazit víc</p>
        </div>
        <div>
          <img
            src="https://img01.ztat.net/banner/a115499feaab412b8690d8e381f92b93/980c2102f2ea439eae997c678faf6158.jpg?imwidth=693"
            alt="img"
          />
        </div>
      </Content>
      <Content bg_color="bg-[#387bb2]">
        <div>
          <p>Klasické tenisky</p>
          <p>Objevte nadčasové modely</p>
          <p>Zobrazit víc</p>
        </div>
        <div>
          <img
            src="https://img01.ztat.net/banner/a115499feaab412b8690d8e381f92b93/980c2102f2ea439eae997c678faf6158.jpg?imwidth=693"
            alt="img"
          />
        </div>
      </Content>
      <Content bg_color="bg-[#3e69b2]">
        <div>
          <p>Klasické tenisky</p>
          <p>Objevte nadčasové modely</p>
          <p>Zobrazit víc</p>
        </div>
        <div>
          <img
            src="https://img01.ztat.net/banner/a115499feaab412b8690d8e381f92b93/980c2102f2ea439eae997c678faf6158.jpg?imwidth=693"
            alt="img"
          />
        </div>
      </Content>
      <Content bg_color="bg-[#253f6b]">
        <div>
          <p>Klasické tenisky</p>
          <p>Objevte nadčasové modely</p>
          <p>Zobrazit víc</p>
        </div>
        <div>
          <img
            src="https://img01.ztat.net/banner/a115499feaab412b8690d8e381f92b93/980c2102f2ea439eae997c678faf6158.jpg?imwidth=693"
            alt="img"
          />
        </div>
      </Content>
      <Content bg_color="bg-[#224a6b]">
        <div>
          <p>Klasické tenisky</p>
          <p>Objevte nadčasové modely</p>
          <p>Zobrazit víc</p>
        </div>
        <div>
          <img
            src="https://img01.ztat.net/banner/a115499feaab412b8690d8e381f92b93/980c2102f2ea439eae997c678faf6158.jpg?imwidth=693"
            alt="img"
          />
        </div>
      </Content>
      <Content bg_color="bg-[#66676e]">
        <div>
          <p>Klasické tenisky</p>
          <p>Objevte nadčasové modely</p>
          <p>Zobrazit víc</p>
        </div>
        <div>
          <img
            src="https://img01.ztat.net/banner/a115499feaab412b8690d8e381f92b93/980c2102f2ea439eae997c678faf6158.jpg?imwidth=693"
            alt="img"
          />
        </div>
      </Content>
      <Content bg_color="bg-[#3d3e42]">
        <div>
          <p>Klasické tenisky</p>
          <p>Objevte nadčasové modely</p>
          <p>Zobrazit víc</p>
        </div>
        <div>
          <img
            src="https://img01.ztat.net/banner/a115499feaab412b8690d8e381f92b93/980c2102f2ea439eae997c678faf6158.jpg?imwidth=693"
            alt="img"
          />
        </div>
      </Content> */}
    </Fragment>
  );
};

// export default Home;
