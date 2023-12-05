/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/prefer-presence-queries */
/* eslint-disable testing-library/prefer-screen-queries */
import { render } from "@testing-library/react";
import mockData from "../mock-data";
import EventList from "../components/EventList";

const mock = mockData[0];

describe("<Event /> component", () => {
  let EventComponent;

  beforeEach(() => {
    EventComponent = render(<EventList event={mock} />);
  });

  test("renders event location", () => {
    expect(EventComponent.queryByText(mock[0].summary)).toBeInTheDocument();
  });

  test("renders event details button with the title (show details)", () => {
    expect(EventComponent.queryByText("show details")).toBeInTheDocument();
  });

  test("event details are hidden by default", () => {
    expect(
      EventComponent.container.querySelector("details")
    ).not.toBeInTheDocument();
  });

  test("User can expand an event to see details", () => {
    expect(EventComponent.queryByText("show details")).toBeInTheDocument();
  });

  test("User can collapse an event to hide details", () => {
    expect(EventComponent.queryByText("hide details")).toBeInTheDocument();
  });

  //  test("event elements are hidden by default", () => {
  //    const eventDOM = EventComponent.container.firstChild;
  //    const details = eventDOM.querySelector(".details");
  //    expect(details).not.toBeInTheDocument();
  //  });
});
