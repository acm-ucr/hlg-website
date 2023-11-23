import Banner from "@/components/Banner";
import Staff from "src/components/staff/Staff.jsx";
import Heading from "src/components/Heading.jsx";

const staff = () => {
  return (
    <div>
      <Banner YellowText={"OUR"} WhiteText={"TEAMS"} />

      <div className="flex flex-col mx-50 items-center">
        <Heading text="Exec Board" />
        <div className="grid grid-cols-2 md:grid-cols-4 md:w-3/5 sm:w-2/3 justify-center py-20 ">
          <Staff
            posname="position name"
            name="Evan Littlecat"
            photo="hlg-website/public/awesome-cat-placeholder.png"
            discordlink="https://www.google.com"
            emaillink="https://www.google.com"
          />

          <Staff
            posname="position name"
            name="Evan Littlecat"
            photo="hlg-website/public/awesome-cat-placeholder.png"
            discordlink="https://www.google.com"
            emaillink="https://www.google.com"
          />

          <Staff
            posname="position name"
            name="Evan Littlecat"
            photo="hlg-website/public/awesome-cat-placeholder.png"
            discordlink="https://www.google.com"
            emaillink="https://www.google.com"
          />

          <Staff
            posname="position name"
            name="Evan Littlecat"
            photo="hlg-website/public/awesome-cat-placeholder.png"
            discordlink="https://www.google.com"
            emaillink="https://www.google.com"
          />
        </div>

        <Heading text="Esports" />
        <div className="grid grid-cols-2 md:grid-cols-4 md:w-3/5 sm:w-2/3 justify-center py-20 ">
          <Staff
            posname="position name"
            name="Evan Littlecat"
            photo="hlg-website/public/awesome-cat-placeholder.png"
            discordlink="https://www.google.com"
            emaillink="https://www.google.com"
          />
          <Staff
            posname="position name"
            name="Evan Littlecat"
            photo="hlg-website/public/awesome-cat-placeholder.png"
            discordlink="https://www.google.com"
            emaillink="https://www.google.com"
          />
          <Staff
            posname="position name"
            name="Evan Littlecat"
            photo="hlg-website/public/awesome-cat-placeholder.png"
            discordlink="https://www.google.com"
            emaillink="https://www.google.com"
          />
          <Staff
            posname="position name"
            name="Evan Littlecat"
            photo="hlg-website/public/awesome-cat-placeholder.png"
            discordlink="https://www.google.com"
            emaillink="https://www.google.com"
          />
        </div>

        <Heading text="Media" />
        <div className="grid grid-cols-2 md:grid-cols-4 md:w-3/5 sm:w-2/3 justify-center py-20 ">
          <Staff
            posname="position name"
            name="Evan Littlecat"
            photo="hlg-website/public/awesome-cat-placeholder.png"
            discordlink="https://www.google.com"
            emaillink="https://www.google.com"
          />
          <Staff
            posname="position name"
            name="Evan Littlecat"
            photo="hlg-website/public/awesome-cat-placeholder.png"
            discordlink="https://www.google.com"
            emaillink="https://www.google.com"
          />
          <Staff
            posname="position name"
            name="Evan Littlecat"
            photo="hlg-website/public/awesome-cat-placeholder.png"
            discordlink="https://www.google.com"
            emaillink="https://www.google.com"
          />
          <Staff
            posname="position name"
            name="Evan Littlecat"
            photo="hlg-website/public/awesome-cat-placeholder.png"
            discordlink="https://www.google.com"
            emaillink="https://www.google.com"
          />
        </div>

        <Heading text="Events" />
        <div className="grid grid-cols-2 md:grid-cols-4 md:w-3/5 sm:w-1/2 justify-center py-20 ">
          <Staff
            posname="position name"
            name="Evan Littlecat"
            photo="hlg-website/public/awesome-cat-placeholder.png"
            discordlink="https://www.google.com"
            emaillink="https://www.google.com"
          />
          <Staff
            posname="position name"
            name="Evan Littlecat"
            photo="hlg-website/public/awesome-cat-placeholder.png"
            discordlink="https://www.google.com"
            emaillink="https://www.google.com"
          />
          <Staff
            posname="position name"
            name="Evan Littlecat"
            photo="hlg-website/public/awesome-cat-placeholder.png"
            discordlink="https://www.google.com"
            emaillink="https://www.google.com"
          />
          <Staff
            posname="position name"
            name="Evan Littlecat"
            photo="hlg-website/public/awesome-cat-placeholder.png"
            discordlink="https://www.google.com"
            emaillink="https://www.google.com"
          />
        </div>
      </div>
    </div>
  );
};

export default staff;
