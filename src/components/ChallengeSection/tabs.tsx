import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./tabs.module.css";
import ActionButton from "../ActionButton";

const Tabs = () => {
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_ROUTE = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get(API_ROUTE);
        setData(response.data);
      } catch (error: any) {
        setError(error.message);
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex flex-col gap-6">
      {data
        .filter((item: any) => item.id <= 5)
        .map((item: any) => (
          <div
            key={item.title}
            className={
              item.id === 1 ? styles.active_state : styles.normal_state
            }
          >
            <span
              className="text-[1.8rem] opacity-50 font-bold"
              style={{ color: item.id !== 1 ? "#2DC4EA" : "" }}
            >
              {item.id < 10 ? "0".concat(item.id) : item.id}{" "}
            </span>
            <span className="text-lg font-[500]">{item.title}</span>
          </div>
        ))}
      <ActionButton text="View more" />
    </div>
  );
};

export default Tabs;
