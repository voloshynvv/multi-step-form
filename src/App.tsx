import styled from 'styled-components';

import Sidebar from '~/components/Sidebar/Sidebar';
import Info from '~/components/Info/Info';
import Plan from '~/components/Plan/Plan';
import AddOns from '~/components/AddOns/AddOns';
import Summary from '~/components/Summary/Summary';
import Button from '~/components/ui/Button/Button';

import { useSteps } from '~/hooks/useSteps';
import { useSubmitForm } from '~/hooks/useSubmitForm';
import { rem } from '~/styles/mixins';

const steps = ['Your info', 'Select plan', 'Add-Ons', 'Summary'];

const App = () => {
  const { activeStep, actions, isFirstStep, isLastStep, validateRef } = useSteps(steps);
  const { isPending, isSuccess, isError, submit } = useSubmitForm();

  const stepsArr = [<Info ref={validateRef} />, <Plan />, <AddOns />, <Summary goToStep={actions.goToStep} />];

  return (
    <AppLayout>
      <Sidebar steps={steps} activeStep={activeStep} />

      <Main>
        <StepContainer>
          {isSuccess && <p>SENT!</p>}
          {isError && <p>ERROR SCREEN!</p>}

          {!isError && !isSuccess && (
            <>
              {stepsArr[activeStep]}

              <Controlls>
                {!isFirstStep && (
                  <Button variant="ghost" onClick={actions.prevStep}>
                    Go Back
                  </Button>
                )}

                {!isLastStep ? (
                  <Button onClick={actions.nextStep}>Next Step</Button>
                ) : (
                  <Button isPending={isPending} variant="secondary" onClick={submit}>
                    Confirm
                  </Button>
                )}
              </Controlls>
            </>
          )}
        </StepContainer>
      </Main>
    </AppLayout>
  );
};

const AppLayout = styled.div`
  margin: 0 auto;
  max-width: ${rem(940)};
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: ${rem(600)};

  @media (min-width: 768px) {
    flex-direction: row;
    padding: ${rem(16)};
    padding-right: 0;
    background-color: var(--white);
    border-radius: var(--rounded-lg);
  }
`;

const Main = styled.main`
  flex: 1;

  @media (min-width: 768px) {
    padding: ${rem(40)};
    padding-bottom: ${rem(16)};
  }
`;

const StepContainer = styled.section`
  background-color: var(--white);
  padding: ${rem(32)} ${rem(24)};
  display: flex;
  border-radius: var(--rounded-md);
  flex-direction: column;
  gap: ${rem(24)};
  margin: ${rem(-72)} ${rem(16)} ${rem(16)};
  height: 100%;

  @media (min-width: 768px) {
    background-color: transparent;
    margin: 0 auto;
    padding: 0;
    gap: ${rem(36)};
    max-width: ${rem(450)};
  }
`;

const Controlls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--white);
  padding: ${rem(16)};
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;

  button {
    &:last-child {
      margin-left: auto;
    }
  }

  @media (min-width: 768px) {
    flex: 1;
    align-items: flex-end;
    position: static;
    background-color: transparent;
    padding: 0;
  }
`;

export default App;
