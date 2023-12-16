import Banner from "@/components/Banner";
import Staff from "src/components/staff/Staff.jsx";
import Heading from "src/components/Heading.jsx";

import { execboard, esports, media, events } from "src/data/staff.js";

const staff = () => {
  return (
    <div>
      <title>HLG | Staff</title>
      <Banner YellowText={"MEET"} WhiteText={"THE BOARD"} />
      <div className="p-14" />

      <div className="flex flex-col">
        <Heading text="Exec Board" />
        <div className="flex flex-row justify-center gap-2 py-20">
          {execboard.map((player, index) => {
            return (
              <div key={index}>
                <Staff
                  posname={player.posname}
                  name={player.name}
                  discordlink={player.discordlink}
                  emaillink={player.emaillink}
                  photo={player.photo}
                />
              </div>
            );
          })}
        </div>

        <Heading text="Esports" />
        <div className="flex flex-row justify-center gap-2 py-20">
          {esports.map((player, index) => {
            return (
              <div key={index}>
                <Staff
                  posname={player.posname}
                  name={player.name}
                  photo={player.photo}
                  discordlink={player.discordlink}
                  emaillink={player.emaillink}
                />
              </div>
            );
          })}
        </div>

        <Heading text="Media" />
        <div className="flex flex-row justify-center gap-2 py-20">
          {media.map((player, index) => {
            return (
              <div key={index}>
                <Staff
                  posname={player.posname}
                  name={player.name}
                  photo={player.photo}
                  discordlink={player.discordlink}
                  emaillink={player.emaillink}
                />
              </div>
            );
          })}
        </div>
      </div>

      <Heading text="Events" />
      <div className="flex flex-row justify-center gap-2 pt-20">
        {events.map((player, index) => {
          return (
            <div key={index}>
              <Staff
                posname={player.posname}
                name={player.name}
                photo={player.photo}
                discordlink={player.discordlink}
                emaillink={player.emaillink}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default staff;
