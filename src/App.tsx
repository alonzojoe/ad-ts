import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import TodoPage from "./pages/TodoPage";
import Settings from "./pages/Settings";
import Conditional from "./pages/Conditional";
import Home from "./pages/Home";
// import Button from "./components/Button";
// import ButtonRef from "./components/ButtonRef";
function App() {
  // const [count, setCount] = useState(0);
  // const ref = useRef<HTMLButtonElement>(null);

  // const handleClick = () => {
  //   alert("button clicked");
  // };

  return (
    <Router>
      <Routes>
        <Route path="" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="todos" element={<TodoPage />} />
          <Route path="settings" element={<Settings />} />
          <Route path="conditional" element={<Conditional />} />
        </Route>
      </Routes>
    </Router>
    // <main className="min-h-screen w-full flex items-center justify-start flex-col py-5">
    //   <h1 className="text-2xl font-bold mb-5">React-TS</h1>
    //   <TodoForm />
    //   <TodoLists />
    //   {/* <Button
    //     type="button"
    //     autoFocus={true}
    //     backgroundColor="red"
    //     padding={[5, 10, 5, 10]}
    //     style={{
    //       fontWeight: "bold",
    //       color: "#FFF",
    //     }}
    //     borderRadius={{
    //       topLeft: 5,
    //       topRight: 5,
    //       bottomRight: 10,
    //       bottomLeft: 10,
    //     }}
    //     setCount={setCount}
    //     onClick={handleClick}
    //   >
    //     React Node {count}
    //   </Button>

    //   <button
    //     ref={ref}
    //     className="bg-green-500 cursor-pointer text-white rounded px-4 py-2 my-10"
    //   >
    //     Click
    //   </button>

    //   <ButtonRef countValue={5} countHistory={["a", "b", "c", "d", "e"]} /> */}
    // </main>
  );
}

export default App;
