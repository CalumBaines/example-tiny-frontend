import ExampleTinyFrontend from "../lib";

const onResultSelected = (result: string) => {
  console.log(result);
};

const onResultsFetch = (results: any[]) => {
  console.log(results);
};

const App = () => (
  <ExampleTinyFrontend
    onResultSelected={onResultSelected}
    onResultsFetch={onResultsFetch}
  />
);

export default App;
