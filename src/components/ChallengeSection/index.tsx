import AnimationFrame from "../AnimationFrame";
import Tabs from "./tabs";

const ChallengeSection = () => {
  return (
    <div className="flex mt-32 mx-8 mb-20 gap-12 justify-center items-center">
      <AnimationFrame className="3/5">
        <img
          src="/images/challenges.png"
          alt="cubic"
          width={600}
          height={600}
        />
      </AnimationFrame>
      <AnimationFrame className="w-2/5">
        <h2 className="text-2xl mb-10 uppercase font-bold">
          Our <span className="text-[#2DC4EA]">Challenges</span>
        </h2>
        <Tabs />
      </AnimationFrame>
    </div>
  );
};

export default ChallengeSection;
