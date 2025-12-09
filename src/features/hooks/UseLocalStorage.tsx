import { useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";

const UseLocalStorage = () => {
  const sigRef = useRef(null);
  const [signatureURL, setSignatureURL] = useState("");

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
      <div className="mt-5 w-100 flex flex-col justify-center items-center gap-3 p-5 bg-gray-100 shadow-md rounded">
        <SignatureCanvas
          ref={sigRef}
          canvasProps={{ width: 500, height: 200 }}
        />
      </div>
    </div>
  );
};

export default UseLocalStorage;
