import { Footer } from "./footer/index";
import { Nav } from "./navbar/IndexNavbar";

const IndexLayout = ({ children }) => (
  <>
    <Nav />
    {children}
    <Footer />
  </>
);

export { IndexLayout };
