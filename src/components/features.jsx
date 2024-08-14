import React from 'react'
import Bar1 from '../../public/images/bar.jpg'
import Robo1 from '../../public/images/Robo1.jpg'
function Front() {
    return (
        <>
        <div className=' clr w-full mt-28 grid justify-center font-[poppins] items-center p-10  space-y-10'>
            <div>
                <h1 className='text-4xl text-white font-bold text-center'>Explore the Possibilities of <span className='text-purple-700'>AI Book Writing </span> with BookAI</h1>
            </div>
            <div className='grid justify-center text-white'>
                <p>Unleash the power of AI to create cativating books in minutes.</p>
                <p>Download ,Distribute whereever you want .Generate unlimited free books</p>
            </div>
            <div className=' justify-center flex  flex-row space-x-7'>
                <button className='btn p-4 rounded-3xl text-white font-semibold' >Get Started</button>
                <button className='btn p-4 rounded-3xl text-white font-semibold'>Get API Access</button>
            </div>

            <div className='md:px-44 pt-20  '>
            <div className='bg-purple-500  bg-opacity-5 rounded-xl '>
            <img className='rounded-2xl p-9 ease-out duration-500 hover:translate-x-3 hover:translate-y-3' src={Bar1} alt="" />
            
            
            </div>
                
                
        </div>
        </div>

        <div className="md:flex m-8 px-28 md:flex-row grid grid-cols-2 gap-5 justify-center ">
    <div className="flex flex-col items-center text-center">
        <img className="rounded-full h-20 w-20 m-8" src={Robo1} alt="AI-Powered Writing" />
        <h2 className="font-semibold text-lg">AI-Powered Writing</h2>
        <p>Generate high-quality content with advanced AI technology</p>
    </div>
    <div className="flex flex-col items-center text-center">
        <img className="rounded-full h-20 w-20 m-8" src={Robo1} alt="AI-Powered Writing" />
        <h2 className="font-semibold text-lg">AI-Powered Writing</h2>
        <p>Generate high-quality content with advanced AI technology</p>
    </div>
    <div className="flex flex-col items-center text-center">
        <img className="rounded-full h-20 w-20 m-8" src={Robo1} alt="AI-Powered Writing" />
        <h2 className="font-semibold text-lg">AI-Powered Writing</h2>
        <p>Generate high-quality content with advanced AI technology</p>
    </div>
    <div className="flex flex-col items-center text-center">
        <img className="rounded-full h-20 w-20 m-8" src={Robo1} alt="AI-Powered Writing" />
        <h2 className="font-semibold text-lg">AI-Powered Writing</h2>
        <p>Generate high-quality content with advanced AI technology</p>
    </div>
</div>

        
        </>
    )
}

export default Front
