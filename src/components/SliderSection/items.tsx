import { FunctionComponent } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

interface IProps {
  data: any;
}

const ListItems: FunctionComponent<IProps> = ({ data }) => {
  return (
    <div className="flex flex-col gap-4">
      {data.map((item: any) => (
        <div key={item} className="flex gap-2">
          <HiArrowNarrowRight fontSize={30} />
          <p>{item}</p>
        </div>
      ))}
    </div>
  );
};

export default ListItems;
