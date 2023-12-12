/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/prefer-screen-queries */
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NumberOfEvents from "../components/NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsComponent;
  beforeEach(() => {
    NumberOfEventsComponent = render(<NumberOfEvents />);
  });

  test("renders number of events textbox", () => {
    const eventTextbox = NumberOfEventsComponent.queryByRole("textbox");
    expect(eventTextbox).toBeInTheDocument();
    expect(eventTextbox).toHaveClass("number-of-events-input");
  });

  test("default number is 32", async () => {
    const eventTextbox = NumberOfEventsComponent.queryByRole("textbox");
    expect(eventTextbox).toHaveValue("32");
  });

  test("updates number of events when user types", async () => {
    const input = NumberOfEventsComponent.queryByRole("textbox");
    await userEvent.type(input, "{backspace}{backspace}10");
    expect(input).toHaveValue("10");
  });
});
