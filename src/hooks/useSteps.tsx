import { useEffect, useRef, useState } from 'react';
import { localStorageKey } from '~/constants';

export interface ValidateRef {
  validate: () => Promise<boolean>;
}

const initialValue = Number(localStorage.getItem(localStorageKey)) || 0;

export const useSteps = (steps: string[]) => {
  const [activeStep, setActiveStep] = useState(initialValue);
  const validateRef = useRef<ValidateRef>(null);

  useEffect(() => {
    localStorage.setItem(localStorageKey, activeStep.toString());
  }, [activeStep]);

  const isFirstStep = activeStep === 0;
  const isLastStep = activeStep === steps.length - 1;

  const nextStep = async () => {
    const isStepValid = validateRef.current ? await validateRef.current.validate() : true;

    if (isStepValid) {
      setActiveStep((step) => step + 1);
    }
  };

  const prevStep = () => {
    setActiveStep((step) => step - 1);
  };

  const goToStep = (step: number) => {
    setActiveStep(step);
  };

  const actions = {
    nextStep,
    prevStep,
    goToStep,
  };

  return { activeStep, isFirstStep, isLastStep, actions, validateRef };
};
