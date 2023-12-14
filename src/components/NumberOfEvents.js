import { useState } from "react"; //App?

//{ setCurrentNOE }
const NumberOfEvents = () => {
  const [number, setNumber] = useState(32);
  const handleInputChanged = (event) => {
    const value = event.target.value;
    setNumber(value);
  };
  return (
    <div id="number-of-events">
      <label htmlFor="number-of-events-input">Number of Events: </label>
      <input
        type="text"
        className="number-of-events-input"
        placeholder="numbers only"
        value={number}
        onChange={handleInputChanged}
      />
    </div>
  );
};

export default NumberOfEvents;
