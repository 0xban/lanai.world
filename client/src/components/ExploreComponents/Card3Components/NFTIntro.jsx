import React from 'react'

const NFTIntro = () => {
  return (

    <div className='bg-gradient-to-r from-sky-700 to-violet-900'>
            
            <div className='flex justify-center text-white md:text-5xl text-3xl font-semibold p-6'>
                Cosmetics in Lanai
            </div>

            <div className='flex justify-center text-white md:text-xl text-center pt-1 px-12 py-12 mb-12'>
                As LANAI is a game based around skill, implementation of NFTs will be in cosmetic form,
                meaning they will not improve a player's damage, just the way they look dealing it. Initially,
                we are looking to implement NFTs in Armor and Weapons that can then be equipped on to a character,
                but the possibilities of utilization are endless.
            </div>

            {/* card1begin */}
            <div className="flex justify-center p-4">
              <div className="flex flex-col md:flex-row md:max-w-4xl rounded-lg bg-gradient-to-b from-slate-500 to-slate-900 my-4 mx-4 shadow-md hover:transition-all duration-500 ease-out hover:drop-shadow-2xl hover:scale-105">
                <div className="p-6 flex flex-col justify-start">
                  <p className="text-white text-center text-3xl font-bold mb-2">Cosmetic Types</p>
                  <p className="text-white text-center text-l mb-4">
                    On release, LANAI will have different equipment available for players to mint and trade on the
                    marketplace.
                  </p>

            <div className='text-slate-800 font-bold text-xl text-center'>
              Armor
            </div>

            <div className='text-white font-normal text-l text-center'>
              <ul>
                <li className='text-green-200 my-1'>
                  Silk, used by the Magus and Occultist.
                </li>
                <li className='text-blue-300 my-1'>
                  Chain, used by the Marksman and Bandit.
                </li>
                <li className='text-red-300 my-1'>
                  Plate, used solely by the Soldier.
                </li>
              </ul>
            </div>

            <p className="text-white text-center text-sm mb-4">
              With armor types not influencing any damage calculations, armor types will be usable by ALL classes.
            </p>

            <div className='text-yellow-500 font-bold text-xl text-center'>
              Weapons
            </div>

            <div className='text-white font-normal text-l text-center'>
              <ul>
                <li className='text-cyan-300 my-1'>
                  Spellblades, Morningstars, Staffs, and Wands are used by the Magus, depending on chosen specialization.
                </li>
                <li className='text-fuchsia-500 my-1'>
                  Gauntlets, used by the Occultist, transform appearance based on the Occultist's chosen specialization.
                </li>
                <li className='text-lime-500 my-1'>
                  Crossbows and Hatchets are used by the Marksman, depending on long-range or short-range specialization. 
                </li>
                <li className='text-stone-400 my-1'>
                  The Tanto and Throwing Weapons are used by the Bandit, depending on specialization.
                </li>
                <li className='text-orange-400 my-1'>
                  The Sword & Shield, Claymores, and Dueling Blades will be used by the Soldier, again, depending on specialization.
                </li>
              </ul>
            </div>

            <p className="text-white text-center text-sm mb-4">
              Weapons, however, <strong>ARE</strong> class-locked, with various movements and animations accompanying them.
            </p>
            {/* card1end */}
            
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

      {/* card2begin */}
            <div className="flex justify-center p-4">
              <div className="flex flex-col md:flex-row md:max-w-4xl rounded-lg bg-gradient-to-b from-slate-500 to-slate-900  shadow-md hover:transition-all duration-500 ease-out hover:drop-shadow-2xl hover:scale-105">
                <div className="p-6 flex flex-col justify-start">
                  <p className="text-white text-center text-3xl font-bold mb-2">Rarities</p>
                  <p className="text-white text-center text-l mb-4">
                    Cosmetics will come in many different shapes and sizes, and will be split up in to four rarity groups:
                  </p>
                  <div className='text-white font-normal text-l text-center p-4'>
                    <ul>
                      <li className='text-stone-400 mt-2 text-xl'>
                        DESTROYED
                      </li>
                        <p className='text-sm text-stone-200'>Destroyed equipment is often as it's described: destroyed. These broken tools have a path to restoration, however. </p>
                        <li className='text-blue-500 mt-2 text-xl'>
                        RARE
                      </li>
                        <p className='text-sm text-blue-200'>Rare equipment not commonly fashioned. There are some signs of use and wear, but the equipment remains viable.</p>
                        <li className='text-fuchsia-500 mt-2 text-xl'>
                        ORNATE
                      </li>
                        <p className='text-sm text-fuchsia-200'>Grandiose equipment, not usually deployed in battle. They are made of exquisite material, and show no signs of wear.</p>
                        <li className='text-orange-400 mt-2 text-xl'>
                        RELIC
                      </li>
                        <p className='text-sm text-orange-200'>Relics are legendary equipment, brought to Lanai from Earth. Not many remain, and the ones that do are guarded heavily and exceed pricelessness.</p>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* card2end */}
  
    </div>
  )
}

export default NFTIntro