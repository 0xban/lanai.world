import React from 'react'

import lolcard1 from '../../../images/lolcard1.png'
import cogcard1 from '../../../images/cogcard1.png'
import nftccard1 from '../../../images/nftccard1.png'

const Cards = () => {
  return (
        <div class="md:flex justify-center p-6 md:p-6">
            <div class="cursor-pointer rounded-lg shadow-lg bg-gradient-to-r from-violet-600 to-sky-600 max-w-fit md:max-w-xs hover:scale-105 active:scale-100">
                <img class="rounded-t-lg" src={lolcard1} alt="" />     
                <div class="p-6">
                    <h5 class="text-white text-xl font-semibold mb-2">
                        The Lore of Lanai
                    </h5>
                    <p class="text-white text-base mb-4">
                        Learn about the exodus to Lanai and explore the social hierarchy present on it.
                    </p>
                </div>
            </div>

            <div class="cursor-pointer rounded-lg shadow-lg bg-gradient-to-r from-sky-600 to-sky-800 max-w-fit md:max-w-xs hover:scale-105 active:scale-100 md:mx-12 my-4">
                <img class="rounded-t-lg" src={nftccard1} alt="" />     
                <div class="p-6">
                    <h5 class="text-white text-xl font-semibold mb-2">
                        Concepts of Gameplay
                    </h5>
                    <p class="text-white text-base mb-4">
                        Learn about the arena, how fights work, and the type of participants in these blood matches.
                    </p>
                </div>
            </div>

            <div class="cursor-pointer rounded-lg shadow-lg bg-gradient-to-r from-sky-800 to-fuchsia-500 max-w-fit md:max-w-xs hover:scale-105 active:scale-100 my-4">
                <img class="rounded-t-lg" src={cogcard1} alt=""/>     
                <div class="p-6">
                    <h5 class="text-white text-xl font-semibold mb-2">
                        NFT Cosmetics
                    </h5>
                    <p class="text-white text-base mb-4">
                        Cosmetics and their role in Lanai, showcased and explained here.
                    </p>
                </div>
            </div>
        </div>
  )
}

export default Cards

