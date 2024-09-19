import { useState } from 'react';

export const useSteps = (steps: string[]) => {
  const [activeStep, setActiveStep] = useState(0);
  const isFirstStep = activeStep === 0;
  const isLastStep = activeStep === steps.length - 1;

  const nextStep = () => {
    setActiveStep((step) => step + 1);
  };

  const backStep = () => {
    setActiveStep((step) => step - 1);
  };

  const goToStep = (step: number) => {
    setActiveStep(step);
  };

  const handleSubmit = () => {
    alert('submitted!');
  };

  const actions = {
    nextStep,
    backStep,
    goToStep,
    handleSubmit,
  };

  return { activeStep, isFirstStep, isLastStep, actions };
};
