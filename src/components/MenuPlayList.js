import React from 'react';
import { FaPlus } from 'react-icons/fa';

const MenuPlayList = () => {
  return (
    <div className='playListContainer'>
      <div className="nameContainer">
        <p>PlayList</p>
        <i><FaPlus /></i>
      </div>

      <div className="playListScroll">
        
      </div>
    </div>
  )
}

export {MenuPlayList}
