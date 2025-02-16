import PropsType from 'prop-types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App({children}) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-grow">
        hello
        {children}
      </main>
      <Footer />
    </div>
  )
}

App.propTypes = {
  children: PropsType.node.isRequired,
}

export default App
