import React from 'react';
import houseImg from './img/house.png'
import scene from './img/scene.avif'


export default function Home() {
  return (
    <div className='bg-slate-900 text-amber-200 grid justify-items-center bg-cover'style={{height: '100vh', backgroundImage: `url(${scene})`}} >
      <h1 className=''>Enter if you Dare!</h1>
      <p className='' >
        Click the door to enter
      </p>
      
      <div className=''>
      <img className='' src={houseImg} alt='haunted house img'/>
      </div>
      
    </div>
  );
}
