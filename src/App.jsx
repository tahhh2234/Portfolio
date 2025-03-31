import PropsType from "prop-types";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App({ children }) {
  return (
    <div className="min-h-screen bg-white flex flex-col dark:bg-neutral-950 transition-colors duration-300">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}

App.propTypes = {
  children: PropsType.node.isRequired,
};

export default App;
