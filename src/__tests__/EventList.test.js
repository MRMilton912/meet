/* eslint-disable testing-library/prefer-presence-queries */
/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/render-result-naming-convention */
import { render } from "@testing-library/react";
import EventList from "../components/EventList";

describe("<EventList /> component", () => {
  test('has an element with "list" role', () => {
    const EventListComponent = render(<EventList />);
    expect(EventListComponent.queryByRole("list")).toBeInTheDocument();
  });
  test("renders correct number of events", () => {
    const EventListComponent = render(<EventList events={[{}, {}, {}, {}]} />);
    expect(EventListComponent.getAllByRole("listitem")).toHaveLength(4);
  });
});
