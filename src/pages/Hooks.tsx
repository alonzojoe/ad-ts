import Container from "../components/Shared/Container";

const Hooks = () => {
  return (
    <Container>
      <h1 className="">Hooks</h1>

      <div className="flex flex-col space-y-2 items-center justify-center p-3">
        <h1 className="text-2xl font-bold">usePrevious</h1>
        <button className="underline text-blue-600 cursor-pointer">next</button>
      </div>

      <div className="w-100 flex justify-center items-center gap-3 p-5 bg-gray-100 shadow-md rounded">
        <div className="w-100/3 flex flex-col items-center justify-center">
          <div className="rounded bg-red-500 w-full p-10 mt-3" />
          <span className="text-base mt-2">Previous</span>
        </div>

        <div className="w-100/3 flex flex-col items-center justify-center">
          <div className="rounded bg-pink-500 w-full p-10 mt-3" />
          <span className="text-base mt-2">Current</span>
        </div>
      </div>
    </Container>
  );
};

export default Hooks;
