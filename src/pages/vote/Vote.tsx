import React from 'react';
import "./vote.css"
const Vote = () => {
  return (
    <div className='Vote_Contaienr'>
      <div className='VoteWrapper'>

        <img draggable="false" className='candidate_img' src="https://upload.wikimedia.org/wikipedia/en/4/4d/Shrek_%28character%29.png" />
        <h1>0</h1>
        <p>Shrek</p>
        <button>Vote for Shrek</button>
      </div>

      <div className='VoteWrapper'>

        <img draggable="false" className='candidate_img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH9HwWSxu7i8hHJKLm6Ud1paICqPFXIuJNrg&s" />
        <h1>0</h1>
        <p>Big Chungus</p>
        <button>Vote for Big Chungus  </button>
      </div>
    </div>
  );
};

export default Vote;
