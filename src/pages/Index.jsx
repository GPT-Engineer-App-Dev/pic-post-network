import { Box, Container, Grid, GridItem, Heading, Image, Text, VStack } from "@chakra-ui/react";

const photos = [
  { id: 1, src: "https://via.placeholder.com/300", alt: "Photo 1" },
  { id: 2, src: "https://via.placeholder.com/300", alt: "Photo 2" },
  { id: 3, src: "https://via.placeholder.com/300", alt: "Photo 3" },
  { id: 4, src: "https://via.placeholder.com/300", alt: "Photo 4" },
  { id: 5, src: "https://via.placeholder.com/300", alt: "Photo 5" },
  { id: 6, src: "https://via.placeholder.com/300", alt: "Photo 6" },
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8}>
        <Box as="header" w="100%" bg="blue.500" color="white" p={4} textAlign="center">
          <Heading as="h1" size="xl">Photo Sharing Platform</Heading>
        </Box>

        <Box as="main" w="100%">
          <Heading as="h2" size="lg" mb={4}>Feed</Heading>
          <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={6}>
            {photos.map(photo => (
              <GridItem key={photo.id}>
                <Image src={photo.src} alt={photo.alt} borderRadius="md" />
              </GridItem>
            ))}
          </Grid>
        </Box>

        <Box as="footer" w="100%" bg="gray.700" color="white" p={4} textAlign="center">
          <Text>&copy; 2023 Photo Sharing Platform. All rights reserved.</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;