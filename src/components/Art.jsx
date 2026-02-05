import { featureLists, goodLists } from "../../constanc"


const Art = () => {
  return (
    <div id='art'>
        <div className='container mx-auto h-full pt-20'>
            <h2 className='will-fade'>The ART</h2>

            <div className='content'>
                <ul className='space-y-4 will-fade'>
                    {goodLists.map(( feature, index ) => (
                        <li key={index} className='flex items-center gap-2'>
                            <img src='/public/images/check.png' alt='check' />
                            <p>{feature}</p>
                        </li>
                    ))}
                </ul>
                <div>
                    <img 
                    src="/public/images/under-img.jpg"
                    alt="cocktail"
                    className="abs-center masked-img size-full object-contain"
                        />
                </div>

               <ul className='space-y-4 will-fade'>
                    {featureLists.map(( feature, index ) => (
                        <li key={index} className='flex items-center justify-start gap-2'>
                            <img src='/public/images/check.png' alt='check' />
                            <p className="md:w-fit w-60">{feature}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Art