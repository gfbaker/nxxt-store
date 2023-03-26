import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Heading = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #C3B9A7;
`;

const Subheading = styled.p`
  font-size: 1.5rem;
  text-align: center;
    color: #C3B9A7;
`;

function Home() {
  return (
    <Container>
      <Heading>Welcome to the best NFT Collection!</Heading>
      <Subheading>Here you can find the best NFTs.</Subheading>
    </Container>
  );
}

export default Home;