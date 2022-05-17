import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather defaultCity="New York" />
        <footer>
          This project is created by Sara and is{" "}
          <a href="https://github.com/bruhhshawn/react-week-5">
            open sourced on github.
          </a>
          and <a href="https://www.netlify.com/">hosted on Netlify</a>
        </footer>
      </div>
    </div>
  );
}
