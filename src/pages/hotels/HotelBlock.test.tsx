import { render, screen } from "@testing-library/react";
import { HotelBlock } from "./HotelBlock";
import { GetHotelsQuery, Hotel } from "../../generated/graphql";
import { getTextContent } from "../../tools/testUtils";

describe("HotelBlock", () => {
  const mockHotel = {
    id: "",
    offer: {
      name: "Deluxe Room",
      displayPrice: { amount: 200, currency: "AUD" },
      savings: { amount: 50, currency: "AUD" },
      cancellationOption: { cancellationType: "FREE_CANCELLATION" },
      promotion: { title: "20% off" },
    },
    property: {
      title: "Hotel Deluxe",
      address: ["123 Street", "City"],
      previewImage: { url: "image.jpg", caption: "hotel image" },
      rating: { ratingType: "star", ratingValue: 4.5 },
    },
  } satisfies NonNullable<GetHotelsQuery["hotels"]>[number];

  it("renders without crashing", () => {
    render(<HotelBlock hotel={mockHotel} />);
  });

  it("displays the correct hotel title, address, and rating", () => {
    render(<HotelBlock hotel={mockHotel} />);
    expect(screen.getByText("Hotel Deluxe")).toBeInTheDocument();
    expect(screen.getByText("123 Street, City")).toBeInTheDocument();
    expect(screen.getAllByTestId("star-full")).toHaveLength(4);
    expect(screen.getAllByTestId("star-half")).toHaveLength(1);
  });

  it("displays the correct room name", () => {
    render(<HotelBlock hotel={mockHotel} />);
    expect(screen.getByText("Deluxe Room")).toBeInTheDocument();
  });

  it("displays the correct cancellation policy", () => {
    render(<HotelBlock hotel={mockHotel} />);
    expect(screen.getByText("Free cancellation")).toBeInTheDocument();
  });

  it("displays the correct hotel price and savings", () => {
    const { container } = render(<HotelBlock hotel={mockHotel} />);
    expect(getTextContent(container)).toContain("$200");
    expect(screen.getByText("Save $50~")).toBeInTheDocument();
  });
});
