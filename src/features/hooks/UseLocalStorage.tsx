const UseLocalStorage = () => {
  const reloadPage = () => window.location.reload();

  const clearStorage = () => {
    window.localStorage.clear();
    reloadPage();
  };

  return (
    <div className="flex flex-col space-y-2 items-center justify-center p-3">
      <h1 className="text-2xl font-bold">useLocalStorage</h1>
      <div className="flex items-center justify-between text-blue-600 underline gap-5">
        <span onClick={reloadPage} className="cursor-pointer">
          Reload Page
        </span>
        <span onClick={clearStorage} className="cursor-pointer">
          Clear Storage
        </span>
      </div>
    </div>
  );
};

export default UseLocalStorage;
