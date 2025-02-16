import PropsType from 'prop-types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App({children}) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500 flex flex-col">
      <Navbar />
      <main className="flex-grow">
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
