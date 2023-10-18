const error = () => {
  return (
    <div className=" flex flex-col my-20 items-center">
      <p className="text-hlg-orange font-bold font-serif text-center text-4xl">
        {" "}
        Whoops!{" "}
      </p>

      <p className="text-hlg-blue-300 text-center font-bold font-serif text-8xl ">
        {" "}
        404{" "}
      </p>

      <p className=" text-hlg-orange font-bold font-mono text-center text-3xl">
        {" "}
        Page Not Found{" "}
      </p>

      <a
        href="/"
        className="text-hlg-blue-300 font-serif font-semibold text-center text-2xl"
      >
        {" "}
        Back To Home Page{" "}
      </a>
    </div>
  );
};

export default error;
