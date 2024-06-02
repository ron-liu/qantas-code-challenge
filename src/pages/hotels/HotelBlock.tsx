import { Grid, GridItem, HStack, Text, Image, VStack } from "@chakra-ui/react";
import { Hotel, GetHotelsQuery } from "../../generated/graphql";
import { Rating } from "./Rating";

type HotelProps = {
  hotel: NonNullable<GetHotelsQuery["hotels"]>[number];
};

export const HotelBlock: React.FC<HotelProps> = ({ hotel }) => {
  const {
    offer: {
      name,
      displayPrice,
      savings,
      cancellationOption: { cancellationType },
      promotion: { title: promotionTitle },
    },
    property: { title, address, previewImage, rating },
  } = hotel;
  return (
    <Grid
      templateColumns={{ base: "auto", sm: "auto 1fr auto" }}
      templateRows={{ base: "repeat(5, auto)", sm: "repeat(3, auto)" }}
      columnGap={4}
      rowGap={2}
    >
      <GridItem
        gridColumn={{ base: "1", sm: "1" }}
        gridRow={{ base: "1", sm: "1/4" }}
        position="relative"
        w={{ base: "100%", sm: "145px" }}
        h={{ base: "auto", sm: "125px" }}
      >
        <HotelImage previewImage={previewImage} promotionTitle={promotionTitle} />
      </GridItem>

      <GridItem gridColumn={{ base: "1", sm: "2" }} gridRow={{ base: "2", sm: "1" }}>
        <HotelDescription title={title} address={address} rating={rating} />
      </GridItem>

      <GridItem gridColumn={{ base: "1", sm: "2" }} gridRow={{ base: "3", sm: "2" }}>
        <RoomName name={name} />
      </GridItem>

      <GridItem gridColumn={{ base: "1", sm: "2" }} gridRow={{ base: "4", sm: "3" }} alignSelf={{ sm: "end" }}>
        <CancellationPolicy freeCancellation={cancellationType === "FREE_CANCELLATION"} />
      </GridItem>

      <GridItem gridColumn={{ base: "1", sm: "3" }} gridRow={{ base: "5", sm: "1/4" }} alignSelf={{ sm: "end" }}>
        <HotelPrice displayPrice={displayPrice} savings={savings} />
      </GridItem>
    </Grid>
  );
};

const HotelImage: React.FC<{
  previewImage: Pick<Hotel["property"]["previewImage"], "url" | "caption">;
  promotionTitle: string;
}> = ({ previewImage, promotionTitle }) => (
  <>
    <Image
      src={previewImage.url}
      alt={previewImage.caption}
      objectFit="cover"
      width="100%"
      height={{ base: "auto", sm: "100%" }}
    />
    <Text
      fontSize="sm"
      fontWeight="semibold"
      textAlign="center"
      color="brand"
      position="absolute"
      top={2}
      left={1}
      p={1}
      bg="white"
    >
      {promotionTitle}
    </Text>
  </>
);

const HotelDescription: React.FC<Pick<Hotel["property"], "title" | "address" | "rating">> = ({
  title,
  address,
  rating,
}) => (
  <>
    <HStack alignItems="baseline" spacing={2}>
      <Text fontSize="2xl" noOfLines={1} maxWidth={400}>
        {title}
      </Text>
      <Rating ratingType={rating.ratingType as "star" | "self"} ratingValue={rating.ratingValue} />
    </HStack>
    <Text fontSize="sm" color="gray.500">
      {address.join(", ")}
    </Text>
  </>
);

const RoomName = ({ name }: Pick<Hotel["offer"], "name">) => (
  <Text fontSize="sm" color="brand" as="u" cursor="pointer">
    {name}
  </Text>
);

const CancellationPolicy: React.FC<{ freeCancellation: boolean }> = ({ freeCancellation }) => (
  <Text fontSize="sm" color="brand2" minH={{ sm: "21px" }}>
    {freeCancellation ? "Free cancellation" : ""}
  </Text>
);
const HotelPrice: React.FC<Pick<Hotel["offer"], "displayPrice" | "savings">> = ({ displayPrice, savings }) => (
  <VStack spacing={0} alignItems="flex-end">
    <Text fontSize="xs">1 night total(AUD)</Text>
    <Text fontSize="2xl">
      <Text as="span" fontSize="lg" verticalAlign="text-top">
        $
      </Text>
      {displayPrice.amount.toFixed(0)}
    </Text>
    <Text fontSize="lg" color="brand" minH={{ sm: "27px" }}>
      {savings ? `Save $${savings.amount.toFixed(0)}~` : ""}
    </Text>
  </VStack>
);
//
