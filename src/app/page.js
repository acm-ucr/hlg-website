import Landing from "@/components/home/Landing";
import Event from "@/components/events/Event";
const home = () => {
  return (
    
    <div>
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <Event />
          <br/>
          <Event month='JAN' day= '31' time='25AM' Event ='Is there 25AM'  description= 'yes there is, also exist Jan32' color="bg-blue-500" />
        </div>

      <Landing />
    </div>
  );
};

export default home;
