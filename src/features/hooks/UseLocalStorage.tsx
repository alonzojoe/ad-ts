import { useRef, useEffect } from "react";
import SignatureCanvas from "react-signature-canvas";
import useLocalStorage from "../../hooks/useLocalStorage";

const UseLocalStorage = () => {
  const sigRef = useRef<SignatureCanvas>(null);
  const [signature, setSignature] = useLocalStorage("signature", "");

  const reloadPage = () => window.location.reload();

  const clearStorage = () => {
    window.localStorage.clear();
    reloadPage();
  };

  const handleEnd = () => {
    if (!sigRef.current) return;
    const url = sigRef.current.toDataURL("image/png");
    setSignature(url);
  };

  useEffect(() => {
    if (signature && sigRef.current) {
      sigRef.current.fromDataURL(signature);
    }
  }, []);

  return (
    <div className="flex flex-col space-y-2 items-center justify-center p-3">
      <h1 className="text-2xl font-bold">useLocalStorage</h1>
      <div className="flex items-center mt-5 justify-between text-blue-600 underline gap-5">
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
          onEnd={handleEnd}
          canvasProps={{ width: 500, height: 200 }}
        />
      </div>
    </div>
  );
};

export default UseLocalStorage;
