import Button from "./components/Button";
function App() {
  const handleClick = () => {
    alert("button clicked");
  };

  return (
    <main className="min-h-screen w-full flex items-center justify-start flex-col py-5">
      <h1 className="text-2xl font-bold mb-5">React-TS</h1>
      <Button
        backgroundColor="red"
        padding={[5, 10, 5, 10]}
        style={{
          fontWeight: "bold",
          color: "#FFF",
        }}
        borderRadius={{
          topLeft: 5,
          topRight: 5,
          bottomRight: 10,
          bottomLeft: 10,
        }}
        onClick={handleClick}
      />
    </main>
  );
}

export default App;
