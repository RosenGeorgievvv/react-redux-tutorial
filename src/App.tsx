import Counter from "./components/Counter";

//NOTE: Reducers do not mutate the original state. Instead of this, they make a copy of it and mutate the copy.

const App = () => {
  return (
    <div>
      <h2>Redux Complete Tutorial</h2>
      <Counter />
    </div>
  );
};

export default App;

