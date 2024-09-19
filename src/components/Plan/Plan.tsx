import { useState } from 'react';
import styled from 'styled-components';

import { plans } from '~/components/Plan/constants';

const Plan = () => {
  const [type, setType] = useState<'monthly' | 'yearly'>('yearly');

  return (
    <>
      <header>
        <h2>Select your plan</h2>
        <p>You have the option of monthly or yearly billing.</p>
      </header>

      <Row>
        {plans.map((plan) => (
          <div>
            <Input type="radio" id={plan.id} name="plan" className="sr-only" />
            <Label htmlFor={plan.id}>
              <Img src={`/icons/${plan.icon}.svg`} alt="" />

              <PlanWrapper>
                <h3>{plan.name}</h3>
                <Price>${plan.price[type]}</Price>
                {type === 'yearly' && <p>2 months free</p>}
              </PlanWrapper>
            </Label>
          </div>
        ))}
      </Row>

      <PlanType></PlanType>
    </>
  );
};

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;

const Input = styled.input`
  &:checked + Label {
    border-color: var(--secondary);
    background-color: var(--light-gray);
  }
`;

const Label = styled.label`
  border-radius: var(--rounded);
  border: 1px solid var(--border);
  padding: 1.25rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  cursor: pointer;

  &:hover {
    border-color: var(--secondary);
  }
`;

const Img = styled.img`
  width: 2.5rem;
  height: 2.5rem;
`;

const PlanWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Price = styled.p`
  font-size: 0.875rem;
  line-height: normal;
`;

const PlanType = styled.div`
  background: var(--light-gray);
  border-radius: var(--rounded-md);
  padding: 0.875rem;
`;

export default Plan;
