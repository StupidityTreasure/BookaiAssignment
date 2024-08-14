import React from 'react'
import bar2 from '../../public/images/bar2.jpg'
function Card() {
    return (
        <>
        

<div className="card hover:-translate-y-5 bg-purple-500 bg-opacity-5 w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img 
      src={bar2}
      alt="Science Fiction"
      className="rounded-xl " />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Science Fiction</h2>
    <p>As Dr. Elara stepped through the shimmering portal, she knew there was no turning back. The fate of two universes now rested in her hands..."</p>
    <span className='text-purple-800 text-lg'>Read More..</span>
  </div>
</div>

<div className=" hover:-translate-y-5 card bg-purple-500 bg-opacity-5 w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img 
      src={bar2}
      alt="Science Fiction"
      className="rounded-xl " />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Science Fiction</h2>
    <p>As Dr. Elara stepped through the shimmering portal, she knew there was no turning back. The fate of two universes now rested in her hands..."</p>
    <span className='text-purple-800 text-lg'>Read More..</span>
  </div>
</div>

<div className=" hover:-translate-y-5 card bg-purple-500 bg-opacity-5 w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img 
      src={bar2}
      alt="Science Fiction"
      className="rounded-xl " />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Science Fiction</h2>
    <p>As Dr. Elara stepped through the shimmering portal, she knew there was no turning back. The fate of two universes now rested in her hands..."</p>
    <span className='text-purple-800 text-lg'>Read More..</span>
  </div>
</div>


        </>
    )
}

export default Card
