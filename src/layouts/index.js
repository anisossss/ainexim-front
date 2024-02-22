import { Footer } from "./footer";
import { Nav } from "./navbar";

const IndexLayout = ({ children }) => (
  <>
    <Nav />
    <section className="auth-container">{children}</section>
    <Footer />
  </>
);

export { IndexLayout };
