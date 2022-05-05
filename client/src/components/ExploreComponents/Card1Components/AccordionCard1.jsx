import React from 'react'

const AccordionCard1 = () => {
  return (
    <div className='flex flex-col p-4'>
      
      {/* card 1 */}
      <div class="flex justify-center">
        <div class="flex flex-col md:flex-row md:max-w-4xl rounded-lg bg-gradient-to-t from-sky-400 to-emerald-800 shadow-md hover:transition-all duration-500 ease-out hover:drop-shadow-2xl hover:scale-105">
          <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://images.pexels.com/photos/39561/solar-flare-sun-eruption-energy-39561.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <div class="p-6 flex flex-col justify-start">
            <h5 class="text-white text-3xl font-bold mb-2">Escape from Earth</h5>
            <p class="text-white text-base mb-4">
              <strong>In the year 2097, solar storms and radiation reached their absolute peak. </strong>They obliterated the Earth, erasing much of what was 
              built in the distant past. MAT Corporation, a multinational conglomerate controlling a significant portion Earth's financial sector, commissioned
              construction of dark matter spacecrafts, plotting course for Lanai II, a moon orbitting Kepler 22b, a close cousin of the Earth.
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
      
      {/* card 2 */}
      <div class="flex justify-center">
        <div class="flex flex-col md:flex-row md:max-w-4xl rounded-lg bg-gradient-to-t from-slate-400 to-stone-800 shadow-md hover:transition-all duration-500 ease-out hover:drop-shadow-2xl hover:scale-105">
          <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://images.pexels.com/photos/39561/solar-flare-sun-eruption-energy-39561.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <div class="p-6 flex flex-col justify-start">
            <h5 class="text-white text-3xl font-bold mb-2">Landing on Lanai </h5>
            <p class="text-white text-base mb-4">
              <strong>With migration to the new world complete, humanity is once again, reborn. </strong> About 1 million brave souls embarked on the 14-year journey
              to Kepler-22b, yet about only half survived the transit, with illness and starvation running rampant on the majority of spacecrafts.
            </p>
            <p class="text-white text-base mt-4">
              Humans lived and farmed in <strong>Solar Domes</strong>, environmentally-regulated buildings made specifically for human
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
      <div class="flex justify-center">
        <div class="flex flex-col md:flex-row md:max-w-4xl rounded-lg bg-gradient-to-b from-indigo-900 to-violet-400 shadow-md hover:transition-all duration-500 ease-out hover:drop-shadow-2xl hover:scale-105">
          <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://images.pexels.com/photos/39561/solar-flare-sun-eruption-energy-39561.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <div class="p-6 flex flex-col justify-start">
            <h5 class="text-white text-3xl font-bold mb-2">Dark Side of the Moon</h5>
            <p class="text-white text-base mb-4">
              <strong>As the cliché goes, "With great power, comes great responsibility".</strong> MAT Corp. created the Solar Domes to provide sustenance and
              shelter the last of humanity. As such, they held a massive amount of leverage over the rest of the population. As the years passed by and comfort set in,
              corruption began to take hold. 
            <p class="text-white text-base mt-4">
              High-ranking MAT Corp. executives were found stealing food, drink, medicine, and other supplies. Rationing was nowhere to be seen
              and nepotism was rampant. Accusers, usually poor, low-ranking citizens working the farms, were punished through violence or most often, starvation, ridding them
              of the exact thing that they provide back to the community. 
            </p>
            <p class="text-white text-base mt-4">
              Humans lived and farmed in <strong>Solar Domes</strong>, environmentally-regulated buildings made specifically for human
              habitability. Solar Domes are able to harness the energy that emanates from Kepler-22, and distribute it to other Solar Domes across the planet. 
              With this technology, humanity could look forward to comfortably preparing the next generation of humans on Lanai. 
            </p>
            </p>
          </div>
        </div>
      </div>

    </div>

    
  )
}

export default AccordionCard1