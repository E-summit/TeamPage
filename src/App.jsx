import React from 'react';
import ImageGrid from "./ImageGrid";

const App = () => {
  return (
    <>
    <div className='overflow-hidden bg-black px-20 py-20'>
      <h1 className='text-white font-bold text-center text-5xl'>Team Page</h1>
      <h1 className='text-white m-5 font-bold text-center text-4xl'>Mentors</h1>
    <div className="bg-none gap-10 flex flex-col sm:flex-row justify-center items-center">
      {/* Card 1 */}
      <div className="flex-shrink-0 bg-black border-2 w-70 border-gray-100 text-white p-4 mx-auto my-auto rounded-lg">
        <img
          src="src\images\MandeepSingh.jpg"
          alt="Person 1"
          className="w-24 h-24 rounded-full mb-4 m-auto my-auto"
        />
        <h2 className="text-2xl text-center font-bold">Dr. Mandeep Singh</h2>
        <p className="text-white text-center font-bold text-1xl">President EDC, TIET</p>
      </div>

      {/* Card 2 */}
      <div className="flex-shrink-0 bg-black border-2 w-70 border-gray-100 text-white p-4 mx-auto my-auto rounded-lg">
        <img
          src="src\images\RajnishMalick.jpg"
          alt="Person 2"
          className="w-24 h-24 rounded-full mb-4 mx-auto my-aouto"
        />
        <h2 className="text-2xl text-center font-bold">Dr. Rajnish Malick</h2>
        <p className="text-white font-bold text-1xl text-center">Vice President EDC, TIET</p>
      </div>
    </div>



      <div> <h1 className="text-white bg-black text-center font-bold text-4xl p-5 m-5">Executive Board</h1> </div>
      <ImageGrid />
    </div>
    </>
  );
};

export default App;
