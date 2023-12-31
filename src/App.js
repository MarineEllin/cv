import Header from "components/Header/Header";
import styles from "./App.module.scss";
import Footer from "components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";
function App() {
  return (
    <div className={`${styles.App} d-flex flex-column`}>
      <Header />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </div>
  );
}

export default App;
