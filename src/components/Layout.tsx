import { Box, Container } from "@chakra-ui/react";

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Container centerContent bg="darkGrey">
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
    </Container>
  );
};
