import RegistrationLine from "../../../public/registration-line.png";
import Image from "next/image";
import Heading from "@/components/Heading";

const Story = () => {
  return (
    <div className="flex flex-col justify-center items-center px-60 space-y-16 text-center text-base ">
      <Heading text="Our Story" />
      <p className="text-hlg-black ">
        Highlanger Gaming began as &quot;Esports at UCR&quot; in 2012 with a
        small group of friends, focusing mostly on Blizzard&apos;s feature title
        of that time, Starcraft 2. Our organization&apos;s goals at the time
        were to create a community where gamers at UCR have a place to flourish
        and connect with each other.
      </p>

      <Image src={RegistrationLine} className="rounded-5" />

      <p className="text-hlg-black">
        Now, Highlander Gaming connects over 2,500 gamers on campus together,
        creating events such as Highlander Con that bring the entire SoCal
        community together. Our esports teams are one of the best in the nation,
        and cover games like Valorant, League of Legends, Super Smash Bros
        Ultimate, Counter-Strike:Global Offensive, and more! We participate in
        leagues such as Collegiate Star League, cLOL, and Collegiate Esports
        Association, all of which cover schools from across the nation.
      </p>

      <p className="text-hlg-black">
        Currently Highlander Gaming&apos;s staff consists of a dedicated group
        of students who are determined to put in the time and effort to make our
        organization&apos;s goals happen. Our officers and directors are
        committed to promoting the widespread acceptance of gaming as a hobby,
        sport, and as an art. If you have any questions or comments, please
        don&apos;t hesitate to contact us. Thank you for being part of this
        wonderful community!
      </p>
    </div>
  );
};

export default Story;
