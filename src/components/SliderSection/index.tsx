import { useState } from "react";
import ListItems from "./items";
import { SliderData } from "../../data/mock";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { ImMobile } from "react-icons/im";
import AnimationFrame from "../AnimationFrame";

const SliderSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const reduceStep = (index: number) => {
    if (index !== 0) setActiveTab(index - 1);
  };
  const addStep = (index: number) => {
    if (index < SliderData.length - 1) setActiveTab(index + 1);
  };
  return (
    <div className="bg-gradient-to-r from-[#3AE7AB] px-10 to-[#2DC4EA] flex items-center h-[536px] transition-all duration-700">
      {SliderData.map((item: any, index: number) => (
        <div
          key={item.title}
          style={{ display: activeTab === index ? "flex" : "none" }}
          className="flex items-center"
        >
          <AnimationFrame className="w-1/2 flex justify-center">
            <img src={item.image} alt="vectors" />
          </AnimationFrame>
          <AnimationFrame className="flex flex-col py-16 mb-2 gap-8 w-1/2 text-white pr-16">
            <h2 className="text-2xl font-bold">{item.title}</h2>
            <ListItems data={item.lists} />
            <div className="flex gap-8">
              <FaChevronLeft
                className={`cursor-pointer ${
                  activeTab === 0 ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={() => reduceStep(index)}
              />{" "}
              <FaChevronRight
                className={`cursor-pointer ${
                  activeTab === SliderData.length - 1
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
                onClick={() => addStep(index)}
              />
            </div>
            {activeTab === 0 ? (
              <div className="flex items-center cursor-pointer gap-4 border-2 border-white w-fit px-4 py-1 rounded-full">
                <h4
                  className="text-white font-semibold"
                  onClick={() => addStep(index)}
                >
                  Desktop
                </h4>
                <div className="w-5 h-5 rounded-full bg-white"></div>
              </div>
            ) : (
              <div className="flex items-center cursor-pointer gap-1 border-2 border-white w-fit px-4 py-1 rounded-full">
                <div className="w-5 h-5 rounded-full bg-white"></div>
                <h4
                  className="text-white font-semibold flex items-center gap-1"
                  onClick={() => reduceStep(index)}
                >
                  <ImMobile fontSize={20} />
                  Mobile
                </h4>
              </div>
            )}
          </AnimationFrame>
        </div>
      ))}
    </div>
  );
};

export default SliderSection;
