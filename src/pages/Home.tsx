import Container from "../components/Shared/Container";
import GenericList from "../components/Lists/GenericList";
const Home = () => {
  return (
    <Container>
      <h1 className="text-2xl font-bold">Home Page</h1>
      <GenericList
        items={[
          { id: 1, title: "The Road not taken", isRead: true },
          { id: 2, title: "Harry potter" },
        ]}
        getKey={(poem) => poem.id}
        getRow={(poem) =>
          `The Book title is '${poem.title}', Read: ${poem.isRead || "unkown"}`
        }
      />
    </Container>
  );
};

export default Home;
