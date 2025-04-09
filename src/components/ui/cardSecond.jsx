import React, { useState } from 'react';
import styled from 'styled-components';

// Styled Components
const PageWrapper = styled.div`
  align-items: center;
  background: #055C9D;
  display: flex;
  font-size: 10px;
  justify-content: center;
  min-height: 100vh;
  margin: 0;
  padding: 0;

  @media (min-width: 768px) {
    font-size: 14px;
  }

  @media (min-width: 992px) {
    font-size: 16px;
  }
`;

const cardWidth = '20rem';

const Card = styled.div`
  background: ${({ isAnswer }) => (isAnswer ? '#fff' : '#201658')};
  border-radius: 1.25rem;
  color: ${({ isAnswer }) => (isAnswer ? '#201658' : '#fff')};
  filter: drop-shadow(5px 5px 5px black);
  flex-shrink: 0;
  font-family: sans-serif;
  font-size: 1.5rem;
  font-weight: bolder;
  height: calc(${cardWidth} * 1.4);
  padding: 2.5rem;
  position: absolute;
  transition: transform 0.25s ease-out;
  width: ${cardWidth};

  &:nth-of-type(1) {
    transform: translate(-40%, 0) rotate(-15deg);
  }
`;

const CardFooter = styled.footer`
  align-items: center;
  bottom: 30px;
  display: flex;
  font-size: 0.75rem;
  left: 2.5rem;
  position: absolute;
  right: 2.5rem;

  img {
    height: 2rem;
    margin-right: 6px;
    width: 2rem;
  }
`;

const AnswerCard = styled(Card)`
  cursor: pointer; /* Indicate clickability */
  transform: translate(40%, 0) rotate(15deg) translate(0, ${({ isSelected }) => (isSelected ? '10%' : '-10%')});
  z-index: ${({ isSelected }) => (isSelected ? 2 : 1)};
`;

// React Component
const CardsAgainstDevs = () => {
  const [selectedChoice, setSelectedChoice] = useState('spaces'); // Default to "spaces"

  const handleCardClick = (choice) => {
    setSelectedChoice(choice);
    console.log('Selected:', choice); // Debug log
  };

  return (
    <PageWrapper>
      {/* Prompt Card */}
      <Card>
        Konichiwa!
        
      </Card>

      {/* Answer Cards */}
      <AnswerCard
        isAnswer
        isSelected={selectedChoice === 'tabs'}
        onClick={() => handleCardClick('tabs')}
      >
        Tabs
        
      </AnswerCard>

      <AnswerCard
        isAnswer
        isSelected={selectedChoice === 'spaces'}
        onClick={() => handleCardClick('spaces')}
      >
        Spaces
        
      </AnswerCard>
    </PageWrapper>
  );
};

export default CardsAgainstDevs;