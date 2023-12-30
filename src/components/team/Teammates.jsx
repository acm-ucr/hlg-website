import React from "react";
import Image from "next/image";
import { team, blue, gold, sub } from "src/data/team";
import Heading from "src/components/Heading";

const teams = [
  { array: team, name: "Varsity" },
  { array: blue, name: "UCR Blue (JV1)" },
  { array: gold, name: "UCR Gold (JV2)" },
  { array: sub, name: "Sub" },
];

const Teammates = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      {teams.map((currTeam, index) => (
        <div key={index} className="">
          <Heading text={currTeam.name} />
          <div className="p-3" />

          <div className="flex">
            <div className="flex-col items-center flex gap-10">
              {currTeam.array.map((player, index) => {
                return (
                  <div
                    key={index}
                    name={player.name}
                    className="w-10/12 md:w-9/12 flex flex-col md:flex-row bg-gradient-to-r from-hlg-blue-300 to-hlg-black"
                  >
                    <div className="sm:w-7/12">
                      <Image
                        src={player.image}
                        alt="champion Image"
                        className=""
                      />
                    </div>

                    <div
                      className="p-4 sm:pl-10 sm:pr-10 bg-gradient-to-r  md:w-2/3 md:h-1/12 text-start"
                      key={index}
                    >
                      <div
                        className={`bg-gradient-to-r ${player.colorInitial} ${player.colorGradient} bg-clip-text text-transparent font-bold text-base md:text-2xl w-full lg:text-3xl `}
                      >
                        <p className="m-0 overflow-wrap">{player.name}</p>
                      </div>

                      <div className="text-hlg-white md:pt-2 text-xs sm:text-sm lg:text-lg">
                        <p className="m-0">YEAR: {player.year}</p>
                        <p className="m-0">POSITION: {player.position}</p>
                        <p className="m-0">CHAMPION: {player.champion}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="p-5" />
        </div>
      ))}
    </div>
  );
};

export default Teammates;
