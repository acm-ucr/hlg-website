import Landing from "@/components/home/Landing";
import Event from "@/components/events/Event";
const home = () => {
  return (
    <div>
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <Event />
        <br />
        <Event
          month="JAN"
          day="31"
          time="25AM"
          title="I am title"
          Event="Is there 25AM"
          description="yes there is, also exist Jan32"
          color="bg-hlg-purple"
        />
      </div>

      <Landing />
    </div>
  );
};

export default home;
