import { FunctionComponent } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

interface IProps {
  children: any;
}

const Layout: FunctionComponent<IProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
