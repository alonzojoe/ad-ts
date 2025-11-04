import Button from "./components/Button";
function App() {
  return (
    <main className="min-h-screen w-full flex items-center justify-start flex-col py-5">
      <h1 className="text-2xl font-bold mb-5">React-TS</h1>
      <Button backgroundColor="red" padding={[5, 10, 5, 10]} />
    </main>
  );
}

export default App;
