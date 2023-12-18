import Banner from "@/components/Banner";
import Staff from "src/components/staff/Staff.jsx";
import Heading from "src/components/Heading.jsx";
import React from "react";

import { staffDepartments } from "src/data/staff.js";

const staff = () => {
  return (
    <div>
      <title>HLG | Staff</title>
      <Banner YellowText={"MEET"} WhiteText={"THE BOARD"} />
      <div className="p-14" />

      <div className="flex flex-col ">
        {staffDepartments.map((department, index) => {
          return (
            <div key={index}>
              <Heading text={department.name} />
              <div className="flex flex-wrap justify-center gap-2 py-20">
                {department.members.map((officer, index) => {
                  return (
                    <div key={index}>
                      <Staff
                        posname={officer.posname}
                        name={officer.name}
                        discordlink={officer.discordlink}
                        emaillink={officer.emaillink}
                        photo={""}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default staff;
