import gsap from 'gsap';
import { ScrollTrigger, SplitTextPlugin } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <div>App</div>
  )
}

export default App