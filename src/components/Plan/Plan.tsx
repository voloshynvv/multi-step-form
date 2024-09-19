import styled from 'styled-components';

const Plan = () => {
  return (
    <>
      <header>
        <h2>Select your plan</h2>
        <p>You have the option of monthly or yearly billing.</p>
      </header>

      <Row>
        <div>
          <Input type="radio" id="arcade" name="plan" defaultChecked className="sr-only" />
          <Label htmlFor="arcade">
            <Img src="/images/arcade.svg" alt="" />

            <PlanWrapper>
              <h3>Arcade</h3>
              <Price>$9/mo</Price>
              {false && <p>2 months free</p>}
            </PlanWrapper>
          </Label>
        </div>

        <div>
          <Input type="radio" id="advanced" name="plan" className="sr-only" />
          <Label htmlFor="advanced">
            <Img src="/images/advanced.svg" alt="" />

            <PlanWrapper>
              <h3>Advanced</h3>
              <Price>$9/mo</Price>
              {false && <p>2 months free</p>}
            </PlanWrapper>
          </Label>
        </div>

        <div>
          <Input type="radio" id="pro" name="plan" className="sr-only" />
          <Label htmlFor="pro">
            <Img src="/images/pro.svg" alt="" />

            <PlanWrapper>
              <h3>Pro</h3>
              <Price>$9/mo</Price>
              {false && <p>2 months free</p>}
            </PlanWrapper>
          </Label>
        </div>
      </Row>
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

export default Plan;
