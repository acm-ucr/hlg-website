import React from "react";
import Image from "next/image";
import { team } from "src/data/team";
import Heading from "src/components/Heading";

const Teammates = () => {
  return (
    <div className="border-4 border-red-500 sm:border-green-500 md:border-gray-500 lg:border-blue-500">
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
            className="flex flex-col pb-5 pt-2 pr-10 pl-10 justify-center items-center"
            key={index}
          >
            <div className="border-4 md:w-11/12 border-purple-500 flex flex-col md:flex-row bg-gradient-to-r from-hlg-blue-300 to-hlg-black">
              <Image
                src={player.image}
                alt="champion Image"
                className="md:w-1/3"
              />
              {/* smallest, small, large, w-1/2 sm:w-1/2 lg:w-1/4 */}

              <div
                className="border-4 border-blue-500 p-4 sm:pl-10 sm:pr-10 bg-gradient-to-r md:text-start md:w-2/3 text-center"
                key={index}
              >
                <div
                  className={`bg-gradient-to-r ${player.colorInitial} ${player.colorGradient} bg-clip-text text-transparent font-bold sm:font-bold text-base md:text-xl lg:text-4xl`}
                >
                  <p>{player.name}</p>
                </div>

                <div className="text-hlg-white pt-2 text-xs sm:text-sm xl:text-2xl">
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
