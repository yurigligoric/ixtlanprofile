import React from 'react';

import Model1 from '../img/model1.png'
import Model2 from '../img/model2.png'
import Model3 from '../img/model3.png'
import Model4 from '../img/model4.png'
import Model5 from '../img/model5.png'
import Dino from '../img/dino1.png'

const Body2 = () => {
  return (
    <div style={{marginTop: 600}}>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
  <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <img src={Model1} alt="Dungeon POV 1" className="w-full" />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">Dungeon POV 1</div>
      <p className="text-gray-700 text-base">
        Perspective view on the dungeon. This is a hallway seen at evening with lamp light lighting the way.
      </p>
    </div>
  </div>

  <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <img src={Model2} alt="Dungeon POV 2" className="w-full" />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">Dungeon POV 2</div>
      <p className="text-gray-700 text-base">
        A perspective view on the storage area of the dungeon. A dim light making it seen.
      </p>
    </div>
  </div>

  <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <img src={Model3} alt="Dungeon Top-Down" className="w-full" />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">Dungeon Top-Down</div>
      <p className="text-gray-700 text-base">
        A top view of the dungeon. This is an evening scene from a dimly lighted interior of the dungeon's rooms.
      </p>
    </div>
  </div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
  <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <img src={Model4} alt="Dungeon POV 3" className="w-full" />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">Dungeon POV 3</div>
      <p className="text-gray-700 text-base">
        Corner view of the dungeon. It is dimly lit by a lamp hanging on the wall.
      </p>
    </div>
  </div>

  <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <img src={Model5} alt="Dungeon POV 4" className="w-full" />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">Dungeon POV 4</div>
      <p className="text-gray-700 text-base">
        Another view of the dungeon from a corner. The dungeon is quiet and dimly lit by a fire light.
      </p>
    </div>
  </div>

  <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <img src={Dino} alt="Dinosaur" className="w-full" />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">Dinosaur</div>
      <p className="text-gray-700 text-base">
        A dinosaur roaming the grassy hill. An effort to create a 3D animal model asset.
      </p>
    </div>
  </div>
</div>
</div>


  );
};

export default Body2;
