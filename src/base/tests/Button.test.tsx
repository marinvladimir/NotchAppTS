import Btn from "../Button";
import React from "react";
import { fireEvent, render } from "@testing-library/react";

describe("button component tests", () => {
  test("renders the Button component", () => {
    render(<Btn text={""} action={function (): void {}} type={"submit"} />);
  });

  test("calls correct function on click", () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <Btn text={"lalala"} action={onClick} type="submit" />
    );
    fireEvent.click(getByText("lalala"));
    expect(onClick).toHaveBeenCalled();
  });
});
