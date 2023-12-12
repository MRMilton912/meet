/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/prefer-presence-queries */
/* eslint-disable testing-library/prefer-screen-queries */
import { render } from "@testing-library/react";
import mockData from "../mock-data";
import EventList from "../components/EventList";
import userEvent from "@testing-library/user-event";
import Event from "../components/Event";

const mock = mockData[0];

describe("<Event /> component", () => {
  let EventComponent;

  beforeEach(() => {
    EventComponent = render(<EventList events={mockData} />);
  });

  test("renders event location", () => {
    expect(EventComponent.queryByText(mock.summary)).toBeInTheDocument();
  });

  test("renders event title", () => {
    expect(EventComponent.queryByText(mock.location)).toBeInTheDocument();
  });

  test("renders event details button with the title (show details)", () => {
    expect(EventComponent.queryByText("show details")).toBeInTheDocument();
  });

  test("event details are hidden by default", () => {
    expect(
      EventComponent.container.querySelector("details")
    ).not.toBeInTheDocument();
  });

  test("User can expand an event to see details", async () => {
    const user = userEvent.setup();
    await user.click(EventComponent.queryByText("show details"));

    expect(
      EventComponent.container.querySelector("details")
    ).toBeInTheDocument();
    expect(EventComponent.queryByText("hide details")).toBeInTheDocument();
    expect(EventComponent.queryByText("show details")).not.toBeInTheDocument();
  });

  test("User can collapse an event to hide details", async () => {
    const user = userEvent.setup();
    await user.click(EventComponent.queryByText("show details"));

    expect(
      EventComponent.container.querySelector("details")
    ).toBeInTheDocument();
    expect(EventComponent.queryByText("hide details")).toBeInTheDocument();
    expect(EventComponent.queryByText("show details")).not.toBeInTheDocument();

    await user.click(EventComponent.queryByText("hide details"));

    expect(
      EventComponent.container.querySelector("details")
    ).not.toBeInTheDocument();
    expect(EventComponent.queryByText("hide details")).not.toBeInTheDocument();
    expect(EventComponent.queryByText("show details")).toBeInTheDocument();
  });

  //  test("event elements are hidden by default", () => {
  //    const eventDOM = EventComponent.container.firstChild;
  //    const details = eventDOM.querySelector(".details");
  //    expect(details).not.toBeInTheDocument();
  //  });
});
