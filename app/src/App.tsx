import { CounterProvider } from "../context/CounterContext";
import ExampleTinyFrontend from "../lib";

const App = () => (
  <CounterProvider>
    <ExampleTinyFrontend name={"test"} />
  </CounterProvider>
);

export default App;
