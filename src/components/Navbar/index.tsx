import Dropdown from "../Dropdown";
import { languageDd, mockDd } from "../../data/mock";
import { BiSearch } from "react-icons/bi";
import { BsFillTelephoneFill, BsWhatsapp } from "react-icons/bs";
import { MdMail } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="flex flex-col">
      <img
        src="/images/logo.svg"
        alt="logo"
        width={250}
        height={250}
        className="absolute left-36 "
      />
      <div className="flex items-center justify-end gap-8 py-1 bg-[#00000029] px-36">
        <h6 className="text-sm">
          <a href="tel:62480838" className="flex items-center gap-2">
            <BsFillTelephoneFill className="text-[#25A9E0]" /> 62480838
          </a>
        </h6>
        <h6 className="text-sm">
          <a href="tel:62480838" className="flex items-center gap-2">
            <BsWhatsapp className="text-[#25A9E0] text-base" /> 84849948
          </a>
        </h6>
        <h6 className="text-sm">
          <a
            href="mailto:info@visibleone.com"
            className="flex items-center gap-2"
          >
            <MdMail className="text-[#25A9E0] text-lg" /> info@visibleone.com
          </a>
        </h6>
        <a
          href="/"
          className="bg-[#37B349] rounded px-2 py-1 flex items-center gap-2 uppercase text-white"
        >
          <IoDocumentTextOutline className="text-lg" /> Quote
        </a>
        <Dropdown title="SG EN" data={languageDd} language />
      </div>
      <div className="flex items-center justify-end gap-8 py-2 bg-white shadow-lg px-36">
        <a href="/">Home</a>
        <Dropdown title="Services" data={mockDd} />
        <Dropdown title="Company" data={mockDd} />
        <a href="/">Blog</a>
        <Dropdown title="Contact Us" data={mockDd} />
        <BiSearch fontSize="24px" />
      </div>
    </div>
  );
};

export default Navbar;
