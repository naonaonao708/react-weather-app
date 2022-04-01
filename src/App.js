import { useState } from "react";
import axios from "axios";
import Title from './components/Title';
import Form from './components/Form';
import Results from './components/Results';
import './App.css';


function App() {
  const [city, setCity] = useState("");
  const [results, setResults] = useState({
    country: "",
    cityName: "",
    temperature: "",
    counditionText: "",
    icon: ""
  });
    const getWeather = (e) => {
        e.preventDefault();
        axios.get("http://api.weatherapi.com/v1/current.json?key=1d09b5de09dc4b2f85b104003223103&q=${city}&aqi=no")
            .then(res => {
              setResults({
                country: res.data.location.country,
                cityName: res.data.location.name,
                temperature: res.data.current.temp_c,
                conditionText: res.data.current.condition.text,
                icon: res.data.current.condition.icon
              })
            })
    }
  return (
    <div className="test">
      <Title cityName={city} />
      <Form setCity={setCity} getWeather={getWeather} />
      <Results results={results}/>
    </div>
  );
}

export default App;
