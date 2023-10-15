import React from 'react';
import Image from 'next/image';
import './teamAlignment.css';

const Teammate = () => {
  return (
    <div class="bg-gradient-to-r from-blue-300 to-black ...">
    <div className="container">
      <div className="image">
        <Image
          src="team/graves.png" // Path to your image inside the 'public' directory
          alt="Graves Image"
          width={500} // Desired width of the image
          height={300} // Desired height of the image
        />
      </div>

      <div className="text">
        <div className="gradient-text">
        <div className="custom-font">
        <p>Matthew "GetTurtled"</p> 
        <p>Nguyen</p>
        </div>
        </div>
        <div className="info">
        <p>YEAR: 3</p> 
        <p>POSITION: JG</p>
        </div>
      </div>

    
    </div>
    </div>
  );
};

export default Teammate;
