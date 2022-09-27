import React, { Fragment } from "react";
import { DATA_IMAGES } from "../../../utils/data-img";
import Content from "../../components/layouts/container";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faHeart } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
// import {}

interface IData {
  category: {
    id: number;
    name: string;
    image: string;
  };
  description: string;
  id: number;
  images: string[];
  price: number;
  title: string;
}

export const Home = () => {
  const zenyDataImages_1 = DATA_IMAGES.filter((item) => item.title === "Zeny_1");
  const zenyDataImages_2 = DATA_IMAGES.filter((item) => item.title === "Zeny_2");
  const [data, setData] = React.useState<string[]>([]);

  const fetchData = async () => {
    const data = await axios.get(" https://api.escuelajs.co/api/v1/products");
    setData(data.data.slice(0, 20));
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <Fragment>
      <Content bg_color="bg-[#229967] ">
        <div className="flex flex-col w-full h-full">
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
          <div className="row_full bg-[#34d27b] mb-[64px]">
            <div className="absolute flex pt-[36px] pb-[24px] text-[14px] ">
              {data.map((item: any) => (
                <div key={item.id}>
                  <div className="relative product_item h-[415px] w-[296px] px-[8px] cursor-pointer">
                    <div className="absolute bg-[#ffff] top-2 right-2 ">
                      <FontAwesomeIcon icon={faHeart} className="fa-thin p-[8px] text-[24px]" />
                    </div>
                    <img className="h-full w-full object-cover" src={item.category.image} alt="product" />
                  </div>
                  {/* <div className="flex ml-[152px] pt-[8px]">
                    {item.info.map((item, idx) => (
                      <div key={idx} className="w-[296px] px-[8px] leading-[20px] cursor-pointer">
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
                  </div> */}
                </div>
              ))}
            </div>
            <div className="absolute bg-[#ffff] right-[152px] top-1/2 translate-y-[-50%]">
              <FontAwesomeIcon icon={faArrowRight} className="p-2 text-[24px]" />
            </div>
          </div>
        </div>
      </Content>
      {/*  */}
      {/*  */}
      <Content bg_color="bg-[#a3a505] ">
        <div className="flex flex-col w-full h-full">
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
          <div className="row_full bg-[#e3e707] mb-[64px]">
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
        </div>
      </Content>
    </Fragment>
  );
};

// export default Home;
