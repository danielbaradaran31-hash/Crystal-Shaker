import gsap from 'gsap';
import { ScrollTrigger, SplitTextPlugin } from 'gsap/all';
import Navbar from './components/Navbar';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
   
    <main>
        <Navbar />
    </main>
  )
}

export default App