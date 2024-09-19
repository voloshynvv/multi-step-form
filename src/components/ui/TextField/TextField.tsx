import { forwardRef } from 'react';
import styled from 'styled-components';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id: string;
  errorMessage?: string;
}

const TextField = forwardRef<HTMLInputElement, Props>(({ label, id, errorMessage, ...props }, ref) => {
  return (
    <div>
      <Row>
        {label && <Label htmlFor={id}>{label}</Label>}
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </Row>

      <Input ref={ref} id={id} {...props} />
    </div>
  );
});

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.25rem;
  line-height: normal;
  font-size: 0.75rem;

  @media (min-width: 768px) {
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
  }
`;

const Label = styled.label`
  color: var(--primary);
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

  &:focus-visible {
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

const ErrorMessage = styled.p`
  color: var(--error);
  font-weight: 700;
`;

export default TextField;
