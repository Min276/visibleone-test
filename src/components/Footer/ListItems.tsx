import { FunctionComponent } from "react";

interface IProps {
  data: any;
}

const ListItems: FunctionComponent<IProps> = ({ data }) => {
  return (
    <ul className="flex flex-col list-disc ml-6 gap-3">
      {data.map((item: any) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default ListItems;
