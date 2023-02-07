import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Dropdown } from "./com/Dropdown";
import { Component } from "./com/Table";
import { Text } from "./com/Text";
import { CustomButton } from "./com/Button";
import { List } from "./com/List";
import ListAll from "./listComponent/ListAll";
import AddToList from "./listComponent/AddToList";

export interface IState {
  people: {
    name: string;
    age: number;
    img: string;
    note?: string;
  }[];
}

//    ^?

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "LeBron James",
      age: 35,
      img: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
      note: "Allegeric to staying on the same team",
    },
    {
      name: "Kobe Bryant",
      age: 42,
      img: "https://cdn.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej.png",
    },
  ]);
  console.log(people);
  return (
    <div className="App">
      <ListAll people={people} />
      <AddToList setPeople={setPeople} people={people} />

      <CustomButton variant="primary" onClick={() => console.log("clicked")}>
        PRimary button
      </CustomButton>
      <Text as="h1" size="sm">
        SAMPLE
      </Text>
      <Text as="label" htmlFor="someId" size="sm">
        Label
      </Text>

      <Component />
      <Dropdown
        data={[
          { id: 1, name: "erwin", lastName: "del" },
          { id: 2, name: "joseph", lastName: "rosario" },
        ]}
        //data={["aaaa","bbb"]}
        labelProp={"id"}
        valueProp={"lastName"}
      />
      <List
        items={[
          { id: 1, name: "hahah", lastName: "del" },
          { id: 2, name: "huhu", lastName: "rosario" },
        ]}
        onClick={(item) => console.log(item)}
      />
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </div>
  );
}

export default App;
