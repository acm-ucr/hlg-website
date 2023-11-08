import React from "react";
import Image from "next/image";
import { team } from "src/data/team";

const Teammate = () => {
  return (
    <div>
      <div className="flex justify-center font-bold text-4xl shadow-md pb-3">
        LEAGUE OF LEGENDS
      </div>
      {team.map((player, index) => {
        <div>
          key = {index}
          name = {player.name}
        </div>;
        return (
          <div
            className="pb-5 pt-2 pr-10 pl-10 justify-center items-center"
            key={index}
          >
            <div className="flex bg-gradient-to-r from-hlg-blue-300 to-hlg-black">
              <Image src={player.image} alt="champion Image" />

              <div className="mt-8 pl-10 pr-10" key={index}>
                <div
                  className={`bg-gradient-to-r from-${player.color} to-${player.colorGradient} bg-clip-text text-transparent font-bold text-4xl`}
                >
                  <p>{player.name}</p>
                </div>

                <div className="text-hlg-white pt-2 ml-2">
                  <p>YEAR: {player.year}</p>
                  <p>POSITION: {player.position}</p>
                  <p>CHAMPION: {player.champion}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Teammate;
