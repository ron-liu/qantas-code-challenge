import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { BsStar, BsStarFill, BsStarHalf, BsCircle, BsCircleFill, BsCircleHalf } from "react-icons/bs";
import { RatingType } from "../../generated/graphql";

type RatingProps = {
  ratingValue: number;
  ratingType: RatingType;
};

export const Rating: React.FC<RatingProps> = ({ ratingType, ratingValue }) => {
  const icons = getIcons(ratingType);
  return (
    <HStack>
      {Array.from({ length: 5 }).map((_, index) => {
        const icon = ratingValue >= index + 1 ? icons.full : ratingValue >= index + 0.5 ? icons.half : icons.empty;
        console.log(icon);
        return (
          <Icon
            boxSize={4}
            key={index}
            as={icon.component}
            data-testid={icon.testId}
            color="yellow.400"
            _hover={{ color: "yellow.500" }}
          />
        );
      })}
    </HStack>
  );
};

type IconObject = {
  full: { component: IconType; testId: string };
  half: { component: IconType; testId: string };
  empty: { component: IconType; testId: string };
};

function getIcons(ratingType: string): IconObject {
  let icons: IconObject = {
    full: { component: BsCircleFill, testId: "circle-full" },
    half: { component: BsCircleHalf, testId: "circle-half" },
    empty: { component: BsCircle, testId: "circle-empty" },
  };

  if (ratingType !== "self") {
    icons = {
      full: { component: BsStarFill, testId: "star-full" },
      half: { component: BsStarHalf, testId: "star-half" },
      empty: { component: BsStar, testId: "star-empty" },
    };
  }

  return icons;
}
