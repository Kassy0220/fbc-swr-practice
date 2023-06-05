import useResponse from "./hooks/useResponse";
import "./App.css";

function App() {
  const url = "https://httpstat.us/200?sleep=2000";
  const headers = { Accept: "application/json" };
  const { data, error, isLoading } = useResponse(url, headers);

  if (error) return <p>Failed to load.</p>;
  if (isLoading) return <p>Loading...</p>;

  return <p>{data.description}</p>;
}

export default App;
