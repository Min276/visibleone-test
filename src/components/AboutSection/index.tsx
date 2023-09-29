import ActionButton from "../ActionButton";
import AnimationFrame from "../AnimationFrame";

const AboutSection = () => {
  return (
    <AnimationFrame className="mx-36 flex items-center justify-center gap-36  mt-80">
      <AnimationFrame className="flex w-1/2 flex-col gap-6">
        <h2 className="text-2xl uppercase font-bold tracking-wide">
          About <span className="text-[#2DC4EA] tracking-wide">Trippro</span>
        </h2>
        <hr className="-mt-2 w-28 border-[#2DC4EA] border-[0.1rem]" />
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita
        </p>
        <ActionButton text="Tour to website" />
      </AnimationFrame>
      <div className="flex">
        <img
          src="/images/tablet.png"
          alt="tablet site"
          width={250}
          height={250}
        />
      </div>
    </AnimationFrame>
  );
};

export default AboutSection;
