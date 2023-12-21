const NumberOfEvents = ({ setCurrentNOE }) => {
  const handleInputChanged = (event) => {
    const value = event.target.value;
    setCurrentNOE(parseInt(value));
  };
  return (
    <div id="number-of-events">
      <label htmlFor="number-of-events-input">Number of Events: </label>
      <input
        type="text"
        className="number-of-events-input"
        placeholder="numbers only"
        defaultValue={32}
        onChange={handleInputChanged}
      />
    </div>
  );
};

export default NumberOfEvents;
