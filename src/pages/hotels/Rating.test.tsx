import { render, screen } from "@testing-library/react";
import { Rating } from "./Rating";

describe("Rating", () => {
  it("renders without crashing", () => {
    render(<Rating ratingType="star" ratingValue={3.5} />);
  });

  it("displays the correct number of full stars", () => {
    render(<Rating ratingType="star" ratingValue={3.5} />);
    expect(screen.getAllByTestId("star-full")).toHaveLength(3);
  });

  it("displays the correct number of half stars", () => {
    render(<Rating ratingType="star" ratingValue={3.5} />);
    expect(screen.getByTestId("star-half")).toBeInTheDocument();
  });

  it("displays the correct number of empty stars", () => {
    render(<Rating ratingType="star" ratingValue={3.5} />);
    expect(screen.getAllByTestId("star-empty")).toHaveLength(1);
  });

  it("uses the correct icons based on the rating type", () => {
    render(<Rating ratingType="self" ratingValue={3.5} />);
    expect(screen.getAllByTestId("circle-full")).toHaveLength(3);
    expect(screen.getByTestId("circle-half")).toBeInTheDocument();
    expect(screen.getAllByTestId("circle-empty")).toHaveLength(1);
  });
});
