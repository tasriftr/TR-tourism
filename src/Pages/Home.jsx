import DarkModeToggle from "../DarkModeToggle";

const Home = () => {
  return (
    <div>
      <h1>Vite + React</h1>
      <DarkModeToggle />

      <p className="dark:text-blue-400 text-red-600 text-6xl font-bold">
        hi how are u
      </p>
    </div>
  );
};

export default Home;
