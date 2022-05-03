import React from 'react'

const Timeline = () => {
  return (
    <div className='bg-gradient-to-r from-sky-700 to-violet-900'>
        <ol className="border-l-2 border-violet-400 ml-4 md:ml-16">
            <li>
                <div className="flex flex-start items-center">
                    <div className="bg-violet-400 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
                    <h4 className="text-white font-semibold text-xl -mt-2">Phase 0.5</h4>
                </div>
                <div className="ml-6 mb-6 pb-6 pt-2">
                    <a className="text-green-500 text-sm">Completed</a>
                        <ul className="bg-white rounded-lg border border-gray-200 w-72 md:w-96 text-gray-900">
                            <li className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">Creation of Whitepaper</li>
                            <li className="px-6 py-2 border-b border-gray-200 w-full">Creation of Twitter, Medium, and Discord</li>
                        </ul>
                </div>
            </li>

            <li>
                <div className="flex flex-start items-center">
                    <div className="bg-violet-400 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
                    <h4 className="text-white font-semibold text-xl -mt-2">Phase 1</h4>
                </div>
                <div className="ml-6 mb-6 pb-6 pt-2">
                    <a className="text-yellow-300 text-sm">In Progress...</a>
                        <ul className="bg-white rounded-lg border border-gray-200 w-72 md:w-96 text-gray-900">
                            <li className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">Creation of the 'lanai.world' Website</li>
                            <li className="px-6 py-2 border-b border-gray-200 w-full">Completion of Lanai Classes</li>
                            <li className="px-6 py-2 border-b border-gray-200 w-full">Rendering of Lanai Art Direction</li>
                        </ul>
                </div>
            </li>

            <li>
                <div className="flex flex-start items-center">
                    <div className="bg-violet-400 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
                    <h4 className="text-white font-semibold text-xl -mt-2">Phase 2</h4>
                </div>
                <div className="ml-6 mb-6 pb-6 pt-2">
                    <a className="text-red-500 text-sm">Not Started</a>
                        <ul className="bg-white rounded-lg border border-gray-200 w-72 md:w-96 text-gray-900">
                            <li className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">Initial Coin Offering of $CHROM</li>
                            <li className="px-6 py-2 border-b border-gray-200 w-full">Deployment of Lanai Liquidity Pools</li>
                        </ul>
                </div>
            </li>

            <li>
                <div className="flex flex-start items-center">
                    <div className="bg-violet-400 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
                    <h4 className="text-white font-semibold text-xl -mt-2">Phase 3</h4>
                </div>
                <div className="ml-6 mb-6 pb-6 pt-2">
                    <a className="text-red-500 text-sm">Not Started</a>
                        <ul className="bg-white rounded-lg border border-gray-200 w-72 md:w-96 text-gray-900">
                            <li className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">NFT Cosmetic Airdrop for $CHROM Holders</li>
                            <li className="px-6 py-2 border-b border-gray-200 w-full">Release of Lanai Mini-Game</li>
                        </ul>
                </div>
            </li>

            <li>
                <div className="flex flex-start items-center">
                    <div className="bg-violet-400 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
                    <h4 className="text-white font-semibold text-xl -mt-2">Phase 4</h4>
                </div>
                <div className="ml-6 mb-6 pb-6 pt-2">
                    <a className="text-red-500 text-sm">Not Started</a>
                        <ul className="bg-white rounded-lg border border-gray-200 w-72 md:w-96 text-gray-900">
                            <li className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">Closed Alpha of Lanai</li>
                            <li className="px-6 py-2 border-b border-gray-200 w-full">Intial "Season 0" offering of NFT Cosmetics</li>
                        </ul>
                </div>
            </li>

        </ol>
    </div>
  )
}

export default Timeline;