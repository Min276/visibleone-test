import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

interface IProps {
  route?: string;
  text: string;
}

const ActionButton: FunctionComponent<IProps> = ({ route, text }) => {
  return (
    <Link
      to={route ?? "/"}
      className="text-sm mt-2 bg-gradient-to-r from-[#2DC4EA] to-[#3AE7AB] text-white px-8 uppercase font-semibold py-3 rounded-full w-fit"
    >
      {text}
    </Link>
  );
};

export default ActionButton;
