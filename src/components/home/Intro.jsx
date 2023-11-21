import photo from "public/prize-winners.png";
import Image from "next/image";
import Heading from "src/components/Heading.jsx";
const Who = () => {
  return (
    <div className="flex flex-col justify-center ">
      <div className="hidden md:block relative max-w-md w-6/12 basis-5/12  transform md:translate-y-180 md:translate-x-80 ">
        <Image
          src={photo}
          className="absolute top-8 left-16 rounded-3xl shadow-md z-20 w-full h-8/12"
        />

        {/* Will only display correctly with aspect-[1.5] AND w-full. If you take out the second part of aspect part, it won't work. I'm not sure why.*/}
        <div className="absolute top-3 left-10 aspect-[1.5] w-full rounded-3xl z-10  bg-hlg-gray"></div>
      </div>

      {/* right side*/}
      <div className="flex flex-col basis-5/12 sm:items-center justify-center gap-5 transform md:translate-x-80 ">
        <div className="py-2" />
        <Heading text={"WHO WE ARE"} />

        <p className="text-start m-0  p-4 max-w-md ">
          Founded in April 2012, Highlander Gaming is a social club at the
          University of California, Riverside whose aim is to promote and
          involve the campus and surrounding areas in esports and the gaming
          industry.
        </p>
      </div>

      <div className="flex flex-row justify-center pt-20 p-4">
        <p className="rounded-3xl bg-hlg-gray  sm:w-12/12 md:w-8/12  p-8 text-center">
          Through Highlander Gaming, we hope to create a strong community that
          dedicates itself to a competitive spirit, while maintaining a strong
          sense of sportsmanship and social inclusion
        </p>
      </div>

      <div className="md:hidden items-center justify-center relative max-w-md p-4  ">
        <Image
          src={photo}
          className=" top-8 left-16 rounded-3xl shadow-md z-20 w-full"
        />
      </div>
    </div>
  );
};

export default Who;
