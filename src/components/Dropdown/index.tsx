import { FunctionComponent, useState } from "react";

interface IProps {
  title: string;
  data: any;
  language?: boolean;
}

const Dropdown: FunctionComponent<IProps> = ({ title, data, language }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event: any) => {
    setSelectedOption(event.target.value);
  };
  return (
    <select
      value={selectedOption}
      onChange={handleSelectChange}
      className={`${
        language
          ? "p-1 rounded bg-transparent text-[#25A9E0] border-2 border-[#5ABCE4]"
          : ""
      }`}
    >
      <option value="">{title}</option>
      {data.map((item: any) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
