// import HeadLink from'../headLink';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


const layout = ({ children }) => (
    <div>
    <Header />
      {children}
    <Footer />
  </div>
);
export default layout