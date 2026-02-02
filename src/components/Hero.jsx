import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all';

const Hero = () => {
    useGSAP(() => {
 const heroSplit = new SplitText('.title', { type: 'chars, words' });


 const paragraphSplit = new SplitText('.subtitle', { type: 'lines' });
    }, []);
  return (
    <>
    <section id='hero' className='noisy'>
         <h1 className='title'>Crystal Shaker</h1>

         <img 
         src='/images/hero-left-left.png'
         alt='left-leaf'
         className='left-leaf'/>

         <img 
         src='/images/hero-right-left.png'
         alt='right-leaf'
         className='right-leaf'/>

         <div className='body'>
            <div className='content'>
                <div className='space-y-5 hidden md:block'>
                    <p>Kühl. Klar. Klassisch.</p>
                    <p className='subtitle'>
                        Genieß den Geist <br /> des Sommers.
                    </p>
                </div>
                <div className='view-cocktails'>
                    <p className='subtitle'>
                        Jeder Cocktail, den wir servieren,
                         spiegelt unsere Leidenschaft für jedes 
                         Detail wider – vom ersten Muddlen bis zur letzten Garnitur.
                          Diese Sorgfalt macht aus einem einfachen Drink etwas wirklich Unvergessliches.
                    </p>
                    <a href='#cocktails'>Cocktails ansehen</a>

                </div>

            </div>

         </div>
    </section>
    </>
  )
}

export default Hero