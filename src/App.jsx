import { useState, useEffect } from "react";
import { Heading,Image  } from "@chakra-ui/react";
import { LaunchItem } from "./components/LaunchItem";
import * as API from "./services/launches.js";
import logo from "./assets/SpaceX-Logo.png";

export function App() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllaunches().then(setLaunches);
  }, []);

  return (
    <div className="App">
      <Image m={4} src={logo} width={300} size="lg" />
      <Heading as="h1" size="lg" m={4}>
        SpaceX launches
      </Heading>
      <section>
          {launches.map((launch) => (
             <LaunchItem key={launch.flight_number} {...launch} />
          ))}
      </section>
    </div>
  );
}
