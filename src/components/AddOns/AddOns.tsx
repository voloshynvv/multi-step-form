import styled from 'styled-components';

const AddOns = () => {
  return (
    <>
      <header>
        <h2>Pick add-ons</h2>
        <p>Add-ons help enhance your gaming experience.</p>
      </header>

      <Row>
        <div>
          <input type="checkbox" />
          <label htmlFor="">
            <h3>Online service</h3>
            <p>Access to multiplayer games</p>
            <p>+$1/mo</p>
          </label>
        </div>
      </Row>
    </>
  );
};

const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default AddOns;
