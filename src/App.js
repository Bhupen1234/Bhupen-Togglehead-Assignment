
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import ExaminationSchedule from './components/ExaminationSchedule/ExaminationSchedule';
import Slider from './components/Slider/Slider';
import Achivements from './components/Achivements/Achivements';
import FAQs from './components/FAQs/FAQs';
import Subscribe from './components/Subscribe/Subscribe';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App" >
      <Navbar/>
      <Hero/>
      <ExaminationSchedule/>
      <Slider />
      <Achivements/>
      <FAQs/>
      <Subscribe/>
      <Footer/>
    </div>
  );
}

export default App;
