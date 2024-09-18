import React, { useState } from 'react';
import styled from 'styled-components';
import InfoStep from './InfoStep';

const StepsContainer = () => {
  const [step, setStep] = useState(0);

  return (
    <Container>
      {step === 0 && <InfoStep />}
      {step === 1 && <p>Second step</p>}
    </Container>
  );
};

const Container = styled.main`
  margin: 0 auto;
  max-width: 58.75rem;
  width: 100%;
  padding: 1rem;
  background-color: var(--white);
  border-radius: var(--rounded-lg);
`;

export default StepsContainer;
