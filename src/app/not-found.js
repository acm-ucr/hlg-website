import Link from "next/link";

const error = () => {
  return (
    <div className=" flex flex-col my-20 items-center">
      <p className="text-hlg-orange text-center text-4xl"> Whoops! </p>

      <p className="text-hlg-blue-300 text-center text-8xl "> 404 </p>

      <p className=" text-hlg-orange text-center text-3xl"> Page Not Found </p>

      <Link
        href="/"
        className="text-hlg-blue-300 text-center text-2xl border border-hlg-gray rounded p-2"
        style={{ textDecoration: "none" }}
      >
        {" "}
        Back To Home Page{" "}
      </Link>
    </div>
  );
};

export default error;
