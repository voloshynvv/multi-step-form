import styled from 'styled-components';

import { useStepsStore } from '~/store/useFormStore';
import { rem } from '~/styles/mixins';
import { getPrice } from '~/utils';
import { addOns as addOnsData, plans } from '~/constants';

interface Props {
  goToStep: (step: number) => void;
}

const Summary = ({ goToStep }: Props) => {
  const { addOns, planIndex, type } = useStepsStore();

  const selectedPlan = plans[planIndex];
  const selectedAddOns = addOnsData.filter((_, i) => addOns.includes(i));

  const totalLabel = type === 'monthly' ? 'month' : 'year';
  const totalPrice = selectedAddOns.reduce((total, curr) => total + curr.price[type], selectedPlan.price[type]);

  return (
    <>
      <header>
        <h2>Finishing up</h2>
        <p>Double-check everything looks OK before confirming.</p>
      </header>

      <StyledSummary>
        <SummaryContainer>
          <PlanDetails>
            <div>
              <h3>
                {selectedPlan.name} ({type[0].toUpperCase() + type.slice(1)})
              </h3>

              <button onClick={() => goToStep(1)}>Change</button>
            </div>

            <p>{getPrice(selectedPlan.price[type], type)}</p>
          </PlanDetails>

          {selectedAddOns.length > 0 && (
            <AddOnsList>
              {selectedAddOns.map((item, i) => (
                <ListItem key={i}>
                  <span>{item.name}</span>
                  <p>+{getPrice(item.price[type], type)}</p>
                </ListItem>
              ))}
            </AddOnsList>
          )}
        </SummaryContainer>

        <Total>
          <p>Total (per {totalLabel})</p>
          <p className="price">{getPrice(totalPrice, type)}</p>
        </Total>
      </StyledSummary>
    </>
  );
};

const StyledSummary = styled.div`
  font-size: ${rem(14)};
`;

const SummaryContainer = styled.div`
  background-color: var(--light-gray);
  border-radius: var(--rounded-md);
  padding: ${rem(16)};

  @media (min-width: 768px) {
    padding-inline: ${rem(24)};
  }
`;

const PlanDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    margin-bottom: ${rem(3)};
    font-size: ${rem(14)};

    @media (min-width: 768px) {
      margin-bottom: ${rem(7)};
      font-size: ${rem(16)};
    }
  }

  button {
    all: unset;
    text-decoration: underline;
    cursor: pointer;
    transition: color 0.25s ease;

    &:hover {
      color: var(--secondary);
    }
  }

  p {
    font-weight: 700;
    color: var(--primary);
    font-size: ${rem(14)};

    @media (min-width: 768px) {
      font-size: ${rem(16)};
    }
  }
`;

const AddOnsList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: ${rem(10)};

  list-style-type: none;
  padding: ${rem(12)} 0 0;
  margin: ${rem(10)} 0 0;
  border-top: 1px solid var(--border);

  @media (min-width: 768px) {
    padding-top: ${rem(16)};
    margin-top: ${rem(24)};
    row-gap: ${rem(16)};
  }
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    color: var(--primary);
  }
`;

const Total = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${rem(16)};
  padding: ${rem(22)} ${rem(15)} 0;

  @media (min-width: 768px) {
    padding: ${rem(20)} ${rem(25)} 0;
  }

  .price {
    color: var(--secondary);
    font-weight: 700;
    font-size: ${rem(16)};

    @media (min-width: 768px) {
      font-size: ${rem(20)};
    }
  }
`;

export default Summary;
