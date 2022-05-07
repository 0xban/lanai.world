import React from 'react'

import efelogo1 from '../../../../images/efelogo1.png'
import dsotmlogo2 from '../../../../images/dsotmlogo2.png'
import lollogo3 from '../../../../images/lollogo3.png'
import trlogo4 from '../../../../images/trlogo4.png'

const AccordionCard1 = () => {
  return (

    

    <div className='flex flex-col p-4'>
    
    <div className='bg-gradient-to-r from-sky-700 to-violet-900'>
        
        <div className='flex justify-center text-white md:text-5xl text-3xl font-semibold p-6'>
            The Lore of Lanai
        </div>

        <div className='flex justify-center text-white md:text-xl text-center pt-1 px-12 py-12 mb-12'>
            How it all began.
        </div>

    </div>
      
      {/* card 1 */}
      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row md:max-w-4xl rounded-lg bg-gradient-to-t from-sky-400 to-emerald-800 shadow-md hover:transition-all duration-500 ease-out hover:drop-shadow-2xl hover:scale-105">
        <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={efelogo1} alt="efelogo2"/>
          <div className="p-6 flex flex-col justify-start">
            <h5 className="text-white text-3xl font-bold mb-2">Escape from Earth</h5>
            <p className="text-white text-base mb-4">
              <strong>In the year 2097, solar storms and radiation reached their absolute peak. </strong>They obliterated the Earth, erasing much of what was 
              built in the distant past. MAT Corporation, a multinational conglomerate controlling a significant portion Earth's financial sector, commissioned
              construction of dark matter spacecrafts, plotting course for Lanai II, a moon orbitting Kepler 22b, a close cousin of the Earth.
            </p>
          </div>
        </div>
      </div>

      {/* dot separation, REMINDER: alter colors in gradient fashion as you finish */}
      <div className='text-2xl'>
        <div className='flex justify-center my-1 text-white drop-shadow-xl'>
          <p>
            .
          </p>
        </div>
        <div className='flex justify-center my-1 text-white'>
          <p>
            .
          </p>
        </div>
        <div className='flex justify-center my-1 text-white'>
          <p>
            .
          </p>
        </div>
        <div className='flex justify-center my-1 text-white'>
          <p>
            .
          </p>
        </div>
        <div className='flex justify-center my-1 text-white'>
          <p>
            .
          </p>
        </div>
      </div>
      
      {/* card 2 */}
      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row md:max-w-4xl rounded-lg bg-gradient-to-t from-slate-400 to-stone-800 shadow-md hover:transition-all duration-500 ease-out hover:drop-shadow-2xl hover:scale-105">
          <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={lollogo3} alt="lollogo3"/>
          <div className="p-6 flex flex-col justify-start">
            <h5 className="text-white text-3xl font-bold mb-2">Landing on Lanai </h5>
            <p className="text-white text-base mb-4">
              <strong>With migration to the new world complete, humanity is once again, reborn. </strong> About 1 million brave souls embarked on the 14-year journey
              to Kepler-22b, yet barely half survived the transit, with illness and starvation running rampant on the majority of spacecrafts.
            </p>
            <p className="text-white text-base">
              Humans live and farm in <strong>Solar Domes</strong>, environmentally-regulated buildings made specifically for human
              habitability. Solar Domes are able to harness the energy that emanates from Kepler-22, and distribute it to other Solar Domes across the planet. 
              With this technology, humanity could look forward to comfortably preparing the next generation of humans on Lanai. 
            </p>
          </div>
        </div>
      </div>

      {/* dot separation, REMINDER: alter colors in gradient fashion as you finish */}
      <div className='text-2xl'>
        <div className='flex justify-center my-1 text-white'>
          <p>
            .
          </p>
        </div>
        <div className='flex justify-center my-1 text-white'>
          <p>
            .
          </p>
        </div>
        <div className='flex justify-center my-1 text-white'>
          <p>
            .
          </p>
        </div>
        <div className='flex justify-center my-1 text-white'>
          <p>
            .
          </p>
        </div>
        <div className='flex justify-center my-1 text-white'>
          <p>
            .
          </p>
        </div>
      </div>

      {/* card3 */}
      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row md:max-w-4xl rounded-lg bg-gradient-to-b from-indigo-900 to-violet-400 shadow-md hover:transition-all duration-500 ease-out hover:drop-shadow-2xl hover:scale-105">
          <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={dsotmlogo2} alt="dsotmlogo2"/>
          <div className="p-6 flex flex-col justify-start">
            <h5 className="text-white text-3xl font-bold mb-2">Dark Side of the Moon</h5>
            <p className="text-white text-base mb-4">
              <strong>As the cliché goes, "With great power, comes great responsibility".</strong> MAT created the Solar Domes to provide sustenance and
              shelter the last of humanity. As such, they held a massive amount of leverage over the rest of the population. As years passed by and comfort set in,
              corruption began to take hold.
            </p> 
            <p className="text-white text-base">
              High-ranking MAT executives were found stealing food, drink, medicine, and other supplies. Rationing was nowhere to be seen
              and nepotism was rampant. Accusers, usually poor, low-ranking citizens working the farms, were punished through violence or most often, starvation, ridding them
              of the exact thing that they provide back to the community. 
            </p>
          </div>
        </div>
      </div>

      {/* dot separation, REMINDER: alter colors in gradient fashion as you finish */}
      <div className='text-2xl'>
        <div className='flex justify-center my-1 text-white'>
          <p>
            .
          </p>
        </div>
        <div className='flex justify-center my-1 text-white'>
          <p>
            .
          </p>
        </div>
        <div className='flex justify-center my-1 text-white'>
          <p>
            .
          </p>
        </div>
        <div className='flex justify-center my-1 text-white'>
          <p>
            .
          </p>
        </div>
        <div className='flex justify-center my-1 text-white'>
          <p>
            .
          </p>
        </div>
      </div>

      {/* card4 */}
      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row md:max-w-4xl rounded-lg bg-gradient-to-b from-amber-500 to-amber-900 shadow-md hover:transition-all duration-500 ease-out hover:drop-shadow-2xl hover:scale-105">
          <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={trlogo4} alt="trlogo1"/>
          <div className="p-6 flex flex-col justify-start">
            <h5 className="text-white text-3xl font-bold mb-2">The Ring</h5>
            <p className="text-white text-base">
              With more and more of the lower-class citizens rebelling against MAT for its poor management of planetary resources, chaos was underway. In order to avoid this,
              MAT created <strong>The Ring</strong>, a method of solving disputes among citizens. In lieu of a traditional judicial system, MAT employed the use of an arena
              to solve problems, justifying its use by asserting its "simplicity," allowing executives to focus on providing Lanai with the resources to grow. With the upper-class 
              citizens and executives not willing to fight for their own skin, the lower-class citizens stepped up to battle in their place, in exchange for a more comfortable life.
            </p>
          </div>
        </div>
      </div>

    </div>

    
  )
}

export default AccordionCard1