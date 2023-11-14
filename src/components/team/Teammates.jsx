import React from "react";
import Image from "next/image";
import { team } from "src/data/team";
import Heading from "src/components/Heading";

const Teammates = () => {
  return (
    <div>
      <div className="flex justify-center pb-5">
        <div className="text-3xl font-bold">
          <Heading text={"League of Legends"} />
        </div>
      </div>

      {team.map((player, index) => {
        <div>
          key = {index}
          name = {player.name}
        </div>;
        return (
          <div
            className="border-8 border-red-500 pb-5 pt-2 pr-10 pl-10 justify-center items-center"
            key={index}
          >
            <div className="flex flex-row bg-gradient-to-r from-hlg-blue-300 to-hlg-black">
              <Image src={player.image} alt="champion Image" />

              <div className="mt-8 pl-10 pr-10" key={index}>
                <div
                  className={`bg-gradient-to-r ${player.colorInitial} ${player.colorGradient} bg-clip-text text-transparent font-bold text-4xl`}
                >
                  <p className="m-0">{player.name}</p>
                </div>

                <div className="border-4 border-orange-500 text-hlg-white pt-2 ml-2">
                  <p className="m-0">YEAR: {player.year}</p>
                  <p className="m-0">POSITION: {player.position}</p>
                  <p className="m-0">CHAMPION: {player.champion}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Teammates;
