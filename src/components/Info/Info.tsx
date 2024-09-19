import styled from 'styled-components';

const Info = () => {
  return (
    <>
      <header>
        <h2>Personal info</h2>
        <p>Please provide your name, email address, and phone number.</p>
      </header>

      <Form>
        <div>
          <Label htmlFor="name">Name</Label>
          <Input type="text" id="name" placeholder="e.g. Stephen King" />
        </div>

        <div>
          <Label htmlFor="email">Email Address</Label>
          <Input type="email" id="email" placeholder="e.g. stephenking@lorem.com" />
        </div>

        <div>
          <Label htmlFor="tel">Phone Number</Label>
          <Input type="tel" id="tel" placeholder="e.g. +1 234 567 890" />
        </div>
      </Form>
    </>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 768px) {
    gap: 1.625rem;
  }
`;

const Label = styled.label`
  font-size: 0.75rem;
  display: block;
  line-height: 1;
  color: var(--primary);
  margin-bottom: 0.25rem;

  @media (min-width: 768px) {
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
  }
`;

const Input = styled.input`
  border: 1px solid var(--border);
  border-radius: var(--rounded);
  font-weight: 500;
  color: var(--primary);
  width: 100%;
  font-size: 1rem;
  padding: 0.625rem 1rem;
  min-height: 2.5rem;

  &:focus {
    outline: none;
    border-color: var(--secondary);
  }

  &::placeholder {
    color: var(--gray);
  }

  @media (min-width: 768px) {
    padding-block: 0.75rem;
    min-height: 3rem;
  }
`;

export default Info;
