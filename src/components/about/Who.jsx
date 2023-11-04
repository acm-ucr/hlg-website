import prizes from "public/prizes.png";
import Image from "next/image";
import Heading from "src/components/Heading.jsx";

const Who = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-center mt-4">
        <Heading text={"Who We Are"} />
      </div>

      <div className="max-w-screen-md text-center mt-4">
        <p>
          Founded in April 2012, Highlander Gaming is a social club at the
          University of California, Riverside whose aim is to promote and
          involve the campus and surrounding areas in esports and the gaming
          industry. Through Highlander Gaming, we hope to create a strong
          community that dedicates itself to a competitive spirit while
          maintaining a strong sense of sportsmanship and social inclusion.
        </p>
      </div>
      <div className="rounded-3xl overflow-hidden relative">
        <Image src={prizes} alt="Prizes" />
      </div>
    </div>
  );
};

export default Who;
