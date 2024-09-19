import styled from 'styled-components';

import Sidebar from '~/components/Sidebar/Sidebar';
import Info from '~/components/Info/Info';
import Plan from '~/components/Plan/Plan';
import AddOns from '~/components/AddOns/AddOns';
import Summary from './components/Summary/Summary';

import { useSteps } from '~/hooks/useSteps';

const steps = ['Your info', 'Select plan', 'Add-Ons', 'Summary'];

const App = () => {
  const { activeStep, isFirstStep, isLastStep, actions } = useSteps(steps);
  const stepsArr = [<Info />, <Plan />, <AddOns />, <Summary goToStep={actions.goToStep} />];

  return (
    <AppLayout>
      <Sidebar steps={steps} activeStep={activeStep} />

      <Main>
        <StepContainer>{stepsArr[activeStep]}</StepContainer>

        {!isFirstStep && <button onClick={actions.backStep}>Go Back</button>}

        {!isLastStep ? (
          <button onClick={actions.nextStep}>Next Step</button>
        ) : (
          <button onClick={actions.handleSubmit}>Confirm</button>
        )}
      </Main>
    </AppLayout>
  );
};

const AppLayout = styled.div`
  margin: 0 auto;
  max-width: 58.75rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 600px;

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 1rem;
    padding-right: 0;
    background-color: var(--white);
    border-radius: var(--rounded-lg);
  }
`;

const Main = styled.main`
  flex: 1;

  @media (min-width: 768px) {
    padding: 2.5rem;
  }
`;

const StepContainer = styled.section`
  background-color: var(--white);
  padding: 2rem 1.5rem;
  display: flex;
  border-radius: var(--rounded-md);
  flex-direction: column;
  gap: 1.5rem;
  margin: -4.5rem 1rem 1rem;
  height: 100%;

  @media (min-width: 768px) {
    background-color: transparent;
    margin: 0 auto;
    padding: 0;
    gap: 2.3rem;
    max-width: 28.125rem;
  }
`;

export default App;
