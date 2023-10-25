import photo from "public/prize-winners.png";
import Image from "next/image";
import Heading from "src/components/Heading.jsx";
const Who = () => {
  return (
    <div>
      <div className="flex flex-col w-screen">
        <div className="flex flex-row border-4 border-yellow-500 w-full h-96 justify-start">
          {/* left side */}
          {/*Note: The left-20, top-10 need to have breakpoints used on it */}
          <div className="relative border-green-500 border-4 w-6/12 h-1/2 basis-1/2">
            <Image
              src={photo}
              className="absolute left-16 top-10 rounded-3xl bg-blue-500 z-20"
            />
            <div
              className="absolute top-3 left-10 bg-blue-500 rounded-3xl z-10 h-72"
              style={{ width: "430px" }}
            ></div>
          </div>

          {/* gap in middle*/}
          <div className="bg-red-500 p-4"></div>

          {/* right side*/}
          <div className="flex flex-col gap-5 border-4 border-blue-500 basis-1/2">
            <Heading text={"WHO WE ARE"} />
            <p className="text-start m-0 p-0 max-w-sm">
              Founded in April 2012, Highlander Gaming is a social club at the
              University of California, Riverside whose aim is to promote and
              involve the campus and surrounding areas in esports and the gaming
              industry.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center pt-10 border-5 border-sky-500">
        <div className="rounded-3xl bg-blue-500 px-5 py-3">
          <div className="flex flex-col items-center">
            <div className="rounded-lg ">
              Through Highlander Gaming, we hope to create a strong community
              that <br />
              dedicates itself to a competitive spirit, while maintaining a
              strong sense of <br />
            </div>
            <div className="pb-0.25"></div>
            <div className="rounded-lg">sportsmanship and social inclusion</div>
          </div>
        </div>
      </div>
    </div>

    // {/*
    // - flex box properties only applies to DIRECT SUBORDINATES. flex->flex->ele, ele will not abide by 1st flex.
    // - basis-1/2 type things must be applied to all children, add up to 1, or else be buggy.
    // - be careful of "w-2" vs "w-1/2" --- one is pixels the other is ratio of REMAINING SPACE INSIDE CONTAINER.
    // - justify-start not only puts them at the beginning, but also makes all children the same size! (but does not work ehre because of unknown reason)
    // */}

    // {/* Things that did not work:
    //   - setting basis on one side and not the other leads to the side without basis disappeasring from the screen altogether.
    //   - remove the basis overall will also lead to the same result
    //   - justify-center does not align all items
    //   - min-h-full, min-height combination does nothing to above, REGARDLESS of where its placed or how many are placed in whichever.
    //   - tried to prevent certain elements from shrinking, making other elements shrinkable, but no work.

    //   "The result of this is that your items will all line up in a row, using the size of the content as their size in the main axis. If there are more items than can fit in the container, they will not wrap but will instead overflow. If some items are taller than others, all items will stretch along the full length of the cross-axis.

    //   Currently going off of likely mistaken assumptions that:
    //     1. flex flex-col, flex flex-row will always give enough space to the object I'm putting in if its too wide (for flex-col) or too tall (flex-row). Overall there'll always be enough space.
    //    */}

    // {/* right side halve */}
    // {/* <div className="flex flex-col gap-5"> */}

    // <div className="grid grid-cols-2 gap-4">
    // <div className="relative">
    //   <img src="unknown source.jpg" alt="Your Photo" className="absolute left-10 top-5 rounded-3xl"/>
    //   <Image src={photo} className="absolute left-20 top-10 rounded-3xl bg-blue-500"/>
    //   </div>

    //   <div className="flex flex-col gap-5">
    //     <Heading text={"WHO WE ARE"} />
    //     <p className="text-start m-0 p-0">
    //       Founded in April 2012, Highlander Gaming is a social club at the
    //       University of California, Riverside whose aim is to promote and
    //       involve the campus and surrounding areas in esports and the gaming
    //       industry.
    //     </p>
    //   </div>
    // </div>
  );
};

export default Who;

// <div className="flex flex-row justify-center">
// {/* left side */}
// {/* first red border */}
// <div className="shrink px-4 bg-red-500"> </div>
// <div className="shrink-0 flex flex-row">
//   {/* the actual photo with background */}
//   {/* <div className="relative bg-green-500 border-4 border-gray-500">
//     <Image src={photo} className="absolute bottom-0 left-0 w-1.5 h-1.5 rounded-3xl"/>
//   </div> */}

//   <div className="w=10/12 h=10/12">
//     <Image src={photo} className="shrink-0 rounded-3xl"/>
//   </div>
// </div>

// {/*the border between two halves*/}
// <div className="px-10 bg-red-500">wgat</div>

// {/* right side halve */}
// <div className="flex flex-col gap-5 items-center basis-1/2">
//   <Heading text={"WHO WE ARE"}/>
//   <div className="text-start">
//     Founded in April 2012, Highlander Gaming is a social club at the University of California, Riverside whose aim is to promote and involve the campus and surrounding areas in esports and the gaming industry.
//   </div>
// </div>

// <div className="px-2 bg-red-500"></div>
// </div>
