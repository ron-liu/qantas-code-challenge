import { render, fireEvent } from "@testing-library/react";
import { SearchCondition } from "./SearchCondition";
import { getTextContent } from "../../tools/testUtils";

describe("SearchCondition", () => {
  const setSortBy = vi.fn();

  it("renders without crashing", () => {
    render(<SearchCondition numberOfHotels={10} sortBy="PRICE_HIGH_TO_LOW" setSortBy={setSortBy} />);
  });

  it("displays the correct number of hotels", () => {
    const { container } = render(
      <SearchCondition numberOfHotels={10} sortBy="PRICE_HIGH_TO_LOW" setSortBy={setSortBy} />
    );
    expect(getTextContent(container)).toContain("10 hotels in Sydney");
  });

  it("displays the correct sorting option", () => {
    const { getByDisplayValue } = render(
      <SearchCondition numberOfHotels={10} sortBy="PRICE_HIGH_TO_LOW" setSortBy={setSortBy} />
    );
    expect(getByDisplayValue("Price high-low")).toBeInTheDocument();
  });

  it("calls setSortBy when the select option is changed", () => {
    const { getByTestId } = render(
      <SearchCondition numberOfHotels={10} sortBy="PRICE_HIGH_TO_LOW" setSortBy={setSortBy} />
    );
    fireEvent.change(getByTestId("sort-select"), {
      target: { value: "PRICE_LOW_TO_HIGH" },
    });
    expect(setSortBy).toHaveBeenCalledWith("PRICE_LOW_TO_HIGH");
  });
});
