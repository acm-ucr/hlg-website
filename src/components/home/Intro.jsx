import photo from "public/prize-winners.png";
import Image from "next/image";
import Heading from "src/components/Heading.jsx";

const Who = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-row w-full h-96 items-start justify-center ">
        {/* left side */}
        <div className="relative max-w-md w-6/12 basis-5/12 ">
          <Image
            src={photo}
            className="absolute top-8 left-16 rounded-3xl shadow-md z-20 w-full h-8/12"
          />

          {/* Will only display correctly with aspect-[1.5] AND w-full. If you take out the second part of aspect part, it won't work. I'm not sure why.*/}
          <div className="absolute top-3 left-10 aspect-[1.5] w-full rounded-3xl z-10  bg-hlg-gray"></div>
        </div>

        {/* gap in middle*/}
        <div className="p-4  basis-24"></div>

        {/* right side*/}
        <div className="flex flex-col basis-5/12 items-center justify-center gap-5">
          <div className="py-2" />
          <Heading text={"WHO WE ARE"} />
          <p className="text-start m-0 p-0 max-w-md">
            Founded in April 2012, Highlander Gaming is a social club at the
            University of California, Riverside whose aim is to promote and
            involve the campus and surrounding areas in esports and the gaming
            industry.
          </p>
        </div>
      </div>

      <div className="text-3xl font-bold pb-3">
        <Heading text={"Join HLG@UCR"} />
      </div>

      <div className="flex flex-row justify-center pt-2 bg-hlg-gray h-30">
        <p className="rounded-3xl  w-5/12 p-8 text-center">
          To become a student member, follow us online and show up to any
          meetings, events, or projects that interest you!
        </p>
      </div>
    </div>
  );
};

export default Who;
