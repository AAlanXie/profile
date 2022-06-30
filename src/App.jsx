import { Work, Education, Header, Publications, Other, Aboutme, Footer, Sidebar } from './components';
import 'aos/dist/aos.css';

function App() {
  return (
    <div className="min-h-screen flex flex-row">
      <div className='w-full'>
        <div className='header-gradient-color'>
          <Header />
        </div>
        <div className='aboutme-gradient-color'>
          <Aboutme />
        </div>
        <div className='education-gradient-color'>
          <Education />
        </div>
        <div className='work-gradient-color'>
          <Work />
        </div>
        <div className='publications-gradient-color'>
          <Publications />
        </div>
        <div className='other-gradient-color'>
          <Other />
        </div>
        <div className='footer-gradient-color'>
          <Footer />
        </div>
      </div>
      <div className='w-14 sidebar-gradient-color'>
        <Sidebar />
      </div>
    </div>
  )
}

export default App
