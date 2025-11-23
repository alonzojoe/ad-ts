import { Outlet, useNavigate } from "react-router-dom";
import Container from "../components/Shared/Container";
import UsePrevious from "../features/hooks/UsePrevious";
import GridContainer from "../components/Shared/GridContainer";
import { HOOKS } from "../constants/hook-lists";

const Hooks = () => {
  return (
    <Container>
      <h1 className="">Hooks</h1>

      <main>
        <Outlet />
      </main>
    </Container>
  );
};

export default Hooks;
