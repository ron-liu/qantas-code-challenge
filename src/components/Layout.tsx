import { Box, Container, Flex } from "@chakra-ui/react";

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Flex bg="darkGrey" justifyContent="center">
      <Box
        maxWidth="1200px"
        width="100%"
        minH="100vh"
        bg="white"
        px={8}
        py={16}
      >
        {children}
      </Box>
    </Flex>
  );
};
