import Banner from "@/components/Banner";
import Staff from "src/components/staff/Staff.jsx";
const staff = () => {
  return (
    <div>
      <Banner />
      <div className="flex flex-row gap-12">
        <Staff
          posname="position name"
          name="Evan Littlecat"
          photo="hlg-website/public/awesome-cat-placeholder.png"
          discordlink="https://www.google.com"
          emaillink="https://www.google.com"
        />

        <Staff
          posname="position name"
          name="Jon Z"
          photo="hlg-website/public/awesome-cat-placeholder.png"
          discordlink="https://www.google.com"
          emaillink="https://www.google.com"
        />
      </div>
    </div>
  );
};

export default staff;
