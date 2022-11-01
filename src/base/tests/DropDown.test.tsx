import Btn from "../Button";
import React from "react";
import { fireEvent, render } from "@testing-library/react";
import DropDown from "../DropDown";

const dropDownData = [
  { value: 5, label: "5 per page" },
  { value: 10, label: "10 per page" },
  { value: 15, label: "15 per page" },
  { value: 30, label: "30 per page" },
  { value: 45, label: "45 per page" },
  { value: 60, label: "60 per page" },
];

describe("dropdown component tests", () => {
  test("renders the DropDown component", () => {
    render(
      <DropDown placeholder={""} options={[]} setRecordsPerPage={() => {}} />
    );
  });

  test("expects the button in the component", () => {
    const { getByTestId } = render(
      <DropDown
        placeholder={""}
        options={dropDownData}
        setRecordsPerPage={() => {}}
      />
    );
    const btn = getByTestId("button");
    expect(btn).toBeInTheDocument();
  });

  test("expects the dropdown to show in the component after button click and to hide after selecting the choice", async () => {
    const baseDom = render(
      <DropDown
        placeholder={""}
        options={dropDownData}
        setRecordsPerPage={() => {}}
      />
    );
    fireEvent.click(await baseDom.findByTestId("button")); //To hover element and show tooltip
    expect(baseDom.getByTestId("dropdown")).toBeTruthy();

    fireEvent.click(await baseDom.queryAllByTestId("dropItem")[0]);
    expect(baseDom.queryAllByTestId("dropdown")).toHaveLength(0);
  });
});
