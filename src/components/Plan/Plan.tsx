import styled from 'styled-components';

import { plans } from '~/constants';
import { getPrice } from '~/utils';
import { rem } from '~/styles/mixins';
import { useStepsStore } from '~/store/useFormStore';

const Plan = () => {
  const { type, planIndex, updatePlan, updateType } = useStepsStore();

  const isYearly = type === 'yearly';

  const handleUpdatePlan = (index: number) => {
    updatePlan(index);
  };

  const handleUpdateType = () => {
    updateType(isYearly ? 'monthly' : 'yearly');
  };

  return (
    <>
      <header>
        <h2>Select your plan</h2>
        <p>You have the option of monthly or yearly billing.</p>
      </header>

      <PlanForm>
        {plans.map((plan, i) => (
          <div key={plan.id}>
            <Input
              type="radio"
              name="plan"
              className="sr-only"
              id={plan.id}
              value={plan.id}
              onChange={() => handleUpdatePlan(i)}
              checked={planIndex === i}
            />
            <Label htmlFor={plan.id}>
              <Img src={plan.icon} alt="" />

              <PlanWrapper>
                <h3>{plan.name}</h3>
                <Price>{getPrice(plan.price[type], type)}</Price>
                {isYearly && <PlanDiscount>2 months free</PlanDiscount>}
              </PlanWrapper>
            </Label>
          </div>
        ))}
      </PlanForm>

      <ToogleType>
        <label>
          <span className={!isYearly ? 'active' : ''}>Monthly</span>
          <input className="sr-only" type="checkbox" checked={isYearly} onChange={handleUpdateType} />
          <div className="slider"></div>
          <span className={isYearly ? 'active' : ''}>Yearly</span>
        </label>
      </ToogleType>
    </>
  );
};

const PlanForm = styled.form`
  display: grid;
  gap: ${rem(16)};

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
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
  padding: ${rem(16)};
  display: flex;
  gap: ${rem(14)};
  cursor: pointer;

  @media (min-width: 768px) {
    padding-block: ${rem(20)};
    gap: ${rem(39)};
    flex-direction: column;
  }

  &:hover {
    border-color: var(--secondary);
  }
`;

const Img = styled.img`
  width: ${rem(40)};
  height: ${rem(40)};
`;

const PlanWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${rem(7)};
  line-height: normal;
`;

const Price = styled.p`
  font-size: ${rem(14)};
`;

const PlanDiscount = styled.p`
  font-size: ${rem(12)};
  color: var(--primary);
`;

const ToogleType = styled.div`
  background: var(--light-gray);
  border-radius: var(--rounded-md);
  padding: ${rem(12)};
  text-align: center;

  label {
    display: inline-flex;
    margin-inline: auto;
    justify-content: center;
    align-items: center;
    gap: ${rem(24)};
    font-weight: 500;
    font-size: ${rem(14)};
    cursor: pointer;
  }

  .active {
    color: var(--primary);
  }

  input {
    &:focus-visible + .slider {
      outline: 2px solid var(--primary);
      outline-offset: 2px;
    }
    &:checked + .slider::after {
      transform: translateX(${rem(18)});
    }
  }

  .slider {
    min-width: ${rem(38)};
    height: ${rem(20)};
    background-color: var(--primary);
    border-radius: var(--rounded-lg);
    padding: ${rem(4)};

    &::after {
      content: '';
      display: block;
      width: ${rem(12)};
      height: ${rem(12)};
      border-radius: 50%;
      background-color: var(--white);
      transition: transform 0.25s ease;
    }
  }
`;

export default Plan;
