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
            className="pb-5 pt-2 pr-10 pl-10 justify-center items-center "
            key={index}
          >
            <div className="flex bg-gradient-to-r from-hlg-blue-300 to-hlg-black">
              <Image
                src={player.image}
                alt="champion Image"
                className="w-1/2"
              />

              <div
                className="flex flex-col justify-center pt-4 pb-4 pl-4 pr-4 sm:pl-10 sm:pr-10 bg-gradient-to-r"
                key={index}
              >
                <div
                  className={`bg-gradient-to-r ${player.colorInitial} ${player.colorGradient} bg-clip-text text-transparent font-medium sm:font-bold text-base sm:text-4xl`}
                >
                  <p>{player.name}</p>
                </div>

                <div className="text-hlg-white pt-2 text-xs sm:text-base">
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
