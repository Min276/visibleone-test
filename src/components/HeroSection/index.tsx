import AnimationFrame from "../AnimationFrame";
import styles from "./hero.module.css";

const HeroSection = () => {
  return (
    <div className={styles.hero_section}>
      <h2 className="z-10 uppercase text-5xl">
        Trippro - an ecommerce solution
      </h2>
      <p className="z-10 w-3/4 text-center">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      </p>
      <AnimationFrame className="flex items-center justify-center gap-8 mb-24">
        <div className="flex items-center z-10 gap-4 border-r-4 pr-8">
          <h4 className="text-2xl font-semibold">Built for:</h4>
          <img
            src="/images/first-image.svg"
            alt="vectors"
            width={75}
            height={75}
          />
        </div>
        <div className="flex items-center z-10 gap-4 border-r-4 pr-8">
          <div className="flex flex-col">
            <h4 className="text-2xl">Technologies:</h4>
            <h4 className="text-2xl font-semibold">Wordpress</h4>
          </div>
          <img
            src="/images/third-image.svg"
            alt="vectors"
            width={70}
            height={70}
          />
        </div>
        <div className="flex items-center z-10 gap-4">
          <div className="flex flex-col">
            <h4 className="text-2xl">Industry:</h4>
            <h4 className="text-2xl font-semibold">Ecommerce</h4>
          </div>
          <img
            src="/images/second-image.svg"
            alt="vectors"
            width={75}
            height={75}
          />
        </div>
      </AnimationFrame>
      <img
        src="/images/mockup.svg"
        className="absolute -bottom-60"
        alt="mockup"
        width={600}
        height={600}
      />
    </div>
  );
};

export default HeroSection;
