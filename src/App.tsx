import NavStrip from './components/common/NavStrip';
import Footer from './components/common/Footer';
import HomeLend from './components/pages/HomeLend';

const App: React.FC = () => {

  return (
    <>
      <div className='flex flex-col min-h-screen'>
        <NavStrip/>
        <div className='flex flex-grow bg-beige'>
          <HomeLend className='md:container md:mx-auto py-6'/>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default App;
