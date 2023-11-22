import photo from "public/prize-winners.png";
import Image from "next/image";
import Heading from "src/components/Heading.jsx";
const Who = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex md:flex-row flex-col-reverse w-full items-center md:items-start justify-center ">
        {/* left side */}
        <div className="md:relative justify-center flex md:max-w-sm lg:max-w-md md:w-6/12 md:basis-5/12 ">
          <Image
            src={photo}
            className="md:absolute w-11/12 md:top-8 md:left-16 rounded-3xl md:drop-shadow-md z-20 md:w-full md:h-8/12"
          />

          <div className="md:absolute md:top-3 md:left-10 md:aspect-[1.5] md:w-full rounded-3xl z-10  bg-hlg-gray"></div>
        </div>

        {/* gap in middle*/}
        <div className="md:p-4  md:basis-24"></div>

        {/* right side*/}
        <div className="flex flex-col basis-5/12 items-center justify-center gap-4">
          <div className="md:py-4" />
          <Heading text={"WHO WE ARE"} />
          <p className="text-left  m-0 p-0 w-11/12 md:max-w-md">
            Founded in April 2012, Highlander Gaming is a social club at the
            University of California, Riverside whose aim is to promote and
            involve the campus and surrounding areas in esports and the gaming
            industry.
          </p>
        </div>
      </div>
      <div className="md:pt-20 lg:pt-[150px]" />
      <div className="flex flex-row justify-center">
        <p className="rounded-3xl bg-hlg-gray w-11/12 md:w-8/12 p-8 text-center">
          Through Highlander Gaming, we hope to create a strong community that
          dedicates itself to a competitive spirit, while maintaining a strong
          sense of sportsmanship and social inclusion
        </p>
      </div>
      <div className="md:pb-44" />

      <div className="text-3xl font-bold pb-3">
        <Heading text={"Join HLG@UCR"} />
      </div>

      <div className="flex flex-row justify-center pt-2 bg-hlg-gray h-30">
        <p className="rounded-3xl  md:w-5/12 p-7 text-center">
          To become a student member, follow us online and show up to any
          meetings, events, or projects that interest you!
        </p>
      </div>
    </div>
  );
};

export default Who;
