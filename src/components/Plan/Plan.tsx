import styled from 'styled-components';

import { plans } from '~/components/Plan/constants';
import { getPrice } from '~/utils/getPrice';
import { rem } from '~/styles/mixins';
import { type Plan, useStepsStore } from '~/store/useFormStore';

const Plan = () => {
  const plan = useStepsStore((state) => state.plan);
  const type = useStepsStore((state) => state.type);
  const updatePlan = useStepsStore((state) => state.updatePlan);
  const updateType = useStepsStore((state) => state.updateType);

  return (
    <>
      <header>
        <h2>Select your plan</h2>
        <p>You have the option of monthly or yearly billing.</p>
      </header>

      <Row>
        {plans.map((singlePlan) => (
          <div key={singlePlan.id}>
            <Input
              type="radio"
              name="plan"
              className="sr-only"
              id={singlePlan.id}
              value={singlePlan.id}
              onChange={(e) => updatePlan(e.target.value as Plan)}
              checked={plan === singlePlan.id}
            />
            <Label htmlFor={singlePlan.id}>
              <Img src={singlePlan.icon} alt="" />

              <PlanWrapper>
                <h3>{singlePlan.name}</h3>
                <Price>{getPrice(singlePlan.price[type], type)}</Price>
                {type === 'yearly' && <PlanDiscount>2 months free</PlanDiscount>}
              </PlanWrapper>
            </Label>
          </div>
        ))}
      </Row>

      <ToogleType>
        <label>
          <span>Monthly</span>
          <input
            type="checkbox"
            checked={type === 'yearly'}
            onChange={() => updateType(type === 'yearly' ? 'monthly' : 'yearly')}
          />
          <span>Yearly</span>
        </label>
      </ToogleType>
    </>
  );
};

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${rem(16)};
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
  padding: ${rem(20)} ${rem(16)};
  display: flex;
  flex-direction: column;
  gap: ${rem(39)};
  cursor: pointer;

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

  label {
    display: inline-flex;
    margin-inline: auto;
    justify-content: center;
    align-items: center;
    gap: ${rem(24)};
    font-weight: 500;
    font-size: ${rem(14)};
  }

  input {
    &:checked + span {
      color: var(--primary);
    }
  }
`;

export default Plan;
