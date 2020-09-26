import HeadLink from'../headLink';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import OnHeader from "../onHeader/onHeader";


const layout = ({ children }) => (
  <div>
    <HeadLink/>
    <OnHeader />
    <Header />
      {children}
    <Footer />
  </div>
);
export default layout