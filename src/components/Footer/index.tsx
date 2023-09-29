/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  OurServicesPartOne,
  OurServicesPartTwo,
  QuickLinks,
} from "../../data/mock";
import ListItems from "./ListItems";
import { MdMail } from "react-icons/md";
import styles from "./footer.module.css";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import AnimationFrame from "../AnimationFrame";

const Footer = () => {
  return (
    <div className={styles.footer_section}>
      <AnimationFrame className="flex justify-between pb-8">
        {QuickLinks.map((item: any) => (
          <div key={item.title} className="z-10 text-white">
            <h3 className="text-lg uppercase font-[500] mb-4">{item.title}</h3>
            <ListItems data={item.lists} />
          </div>
        ))}
        {OurServicesPartOne.map((item: any) => (
          <div key={item.title} className="z-10 text-white">
            <h3 className="text-lg uppercase font-[500] mb-4">{item.title}</h3>
            <ListItems data={item.lists} />
          </div>
        ))}
        {OurServicesPartTwo.map((item: any) => (
          <div key={item.title} className="z-10 text-white">
            <h3 className="invisible mb-4">{item.title}</h3>
            <ListItems data={item.lists} />
          </div>
        ))}
        <div className="z-10 text-white">
          <h3 className="text-lg uppercase font-[500] mb-4">
            Visible One Singapore
          </h3>
          <div className="flex flex-col gap-4">
            <a href="tel:+6562480838">+65 62480828</a>
            <a
              href="mailto:info@visibleone.com"
              className="flex items-center gap-2"
            >
              <MdMail className="text-white text-lg" /> info@visibleone.com
            </a>
            <p>
              24 Sin Ming Lane Midview City #07-93,
              <br /> Singapore 573970
            </p>
            <p>Office Hour: Mon - Fri (9 am - 6 pm)</p>
          </div>
          <div className="mt-6 flex gap-6 items-center">
            <a href="#" className="bg-[#25A9E0] text-white px-3 py-2 rounded">
              Contact Us
            </a>
            <a href="#" className="text-[#25A9E0] font-[500]">
              Contact HK Office
            </a>
          </div>
        </div>
      </AnimationFrame>
      <hr className="z-10" />
      <AnimationFrame className="my-2 z-10 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <img
            src="/images/Shopify.svg"
            alt="shopify"
            width={130}
            height={130}
            className="-mt-2"
          />
          <img
            src="/images/PayPal.svg"
            alt="shopify"
            width={150}
            height={150}
          />
          <img src="/images/Gads.svg" alt="ads" width={130} height={130} />
          <img
            src="/images/Gac.svg"
            className="mx-4"
            alt="analytics"
            width={150}
            height={150}
          />
          <img
            src="/images/Gsv.svg"
            alt="street view"
            width={130}
            height={130}
          />
        </div>
        <div className="flex mb-1">
          <form action="/" className="flex items-center gap-4">
            <div className="flex flex-col">
              <h5>Subscribe to our news, tips and guidelines</h5>
              <input
                type="email"
                required
                placeholder="123@test.com"
                className="h-10 w-[19rem] mt-1 rounded bg-transparent border-2 px-2"
              />
            </div>
            <input
              type="submit"
              value="Submit"
              className="cursor-pointer bg-[#25A9E0] text-white px-3 py-2 rounded mt-6 w-fit h-fit"
            />
          </form>
        </div>
      </AnimationFrame>
      <hr className="z-10" />
      <AnimationFrame className="flex items-center gap-6 z-10 justify-center mt-6">
        <a href="#">
          <FaFacebookF fontSize="28px" />
        </a>
        <a href="#">
          <FaTwitter fontSize="30px" />
        </a>
        <a href="#">
          <FaInstagram fontSize="30px" />
        </a>
        <a href="#">
          <FaLinkedinIn fontSize="30px" />
        </a>
      </AnimationFrame>
      <AnimationFrame className="flex gap-6 z-10 mt-6 justify-center">
        <a href="#">Shopping T&C</a>
        <a href="#">Terms & Conditions</a>
        <a href="#">Privacy Policy</a>
        <p>&copy; 2018 - Visible One</p>
      </AnimationFrame>
    </div>
  );
};

export default Footer;
