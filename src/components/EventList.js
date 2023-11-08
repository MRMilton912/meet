// import Event from "./Event";

const EventList = ({ events }) => {
  return (
    <ul id="event-list">
      {
        //events ? events.map((event) => <Event event={event} />) : null}
        events ? events.map((event) => <p>{JSON.stringify(event)} </p>) : null
      }
    </ul>
  );
};

export default EventList;
