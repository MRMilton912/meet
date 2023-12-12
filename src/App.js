//import { useEffect, useState } from "react";
import "./App.css";
import EventList from "./components/EventList";
import CitySearch from "./components/CitySearch";
import NumberOfEvents from "./components/NumberOfEvents";
//import { getEvents } from "./api";

function App() {
  //const [events, setEvents] = useState([]);
  //const [currentNOE, setCurrentNOE] = useState(32);

  //const fetchData = async () => {
  //  const allEvents = await getEvents();
  //  setEvents(allEvents.slice(0, currentNOE));
  //};

  //useEffect(() => {
  //  fetchData();
  //}, []);

  return (
    <div className="App">
      <CitySearch />
      <NumberOfEvents />
      <EventList />
    </div>
  );
}

export default App;
