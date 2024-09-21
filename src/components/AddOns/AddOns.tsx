import styled from 'styled-components';
import { useStepsStore } from '~/store/useFormStore';

import { rem } from '~/styles/mixins';
import { getPrice } from '~/utils/getPrice';
import { addOns as addOnsData } from '~/components/AddOns/constants';

const AddOns = () => {
  const type = useStepsStore((state) => state.type);
  const addOns = useStepsStore((state) => state.addOns);
  const updateAddOns = useStepsStore((state) => state.updateAddOns);

  return (
    <>
      <header>
        <h2>Pick add-ons</h2>
        <p>Add-ons help enhance your gaming experience.</p>
      </header>

      <AddOnsList>
        {addOnsData.map((item) => (
          <Label key={item.id}>
            <input
              type="checkbox"
              checked={addOns[item.id]}
              onChange={(e) => updateAddOns({ [item.id]: e.target.checked })}
            />

            <div className="flex-1">
              <Name>{item.name}</Name>
              <p>{item.description}</p>
            </div>

            <Price>+{getPrice(item.price[type], type)}</Price>
          </Label>
        ))}
      </AddOnsList>
    </>
  );
};

const AddOnsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${rem(16)};
`;

const Label = styled.label`
  display: flex;
  cursor: pointer;
  border-radius: var(--rounded);
  border: 1px solid var(--border);
  align-items: center;
  gap: ${rem(16)};
  padding: ${rem(10)};
  font-size: ${rem(12)};

  &:has(input:checked) {
    border-color: var(--secondary);
    background-color: var(--light-gray);
  }

  &:hover {
    border-color: var(--secondary);
  }

  input {
    min-width: ${rem(20)};
    height: ${rem(20)};
    border: 1px solid var(--border);
    appearance: none;
    border-radius: ${rem(4)};

    &:focus-visible {
      outline: none;
      border-color: var(--secondary);
    }

    &:checked {
      background: url('/icons/checkmark.svg') center no-repeat, var(--secondary);
      border-color: var(--secondary);
    }
  }

  @media (min-width: 768px) {
    gap: ${rem(21)};
    font-size: ${rem(14)};
    padding: ${rem(16)};
  }
`;

const Name = styled.h3`
  margin-bottom: ${rem(7)};

  @media (max-width: 768px) {
    margin-bottom: ${rem(3)};
    font-size: ${rem(14)};
  }
`;

const Price = styled.p`
  color: var(--secondary);
`;

export default AddOns;
