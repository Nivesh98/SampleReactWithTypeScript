import "./App.css";
import { Button } from "./components/Button";
import { Container } from "./components/Container";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Input } from "./components/Input";
import { Oscar } from "./components/Oscar";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };

  const nameList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Princess",
      last: "Diana",
    },
  ];

  return (
    <div className="App">
      <Container styles={{ border: "1px solid black", padding: "1rem" }} />

      {/* <Button
        handleClick={(event, id) => {
          console.log("Button Clicked", event, id);
        }}
      />

      <Input value="" handleChange={(event => console.log(event))}/> */}

      {/* <Greet name="Nivesh" messageCount={7} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList}/> */}
      {/* <Status status="loading" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leanardi Discpario!</Heading>
      </Oscar>
      <Greet name="Nivsh" isLoggedIn={false} /> */}
    </div>
  );
}

export default App;
