import React from 'react';
import styled, { css } from 'styled-components';

import { rem } from '~/styles/mixins';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isPending?: boolean;
  variant?: Variant;
}

const Button = ({ children, isPending = false, variant = 'primary', ...props }: Props) => {
  return (
    <StyledButton disabled={isPending} $variant={variant} {...props}>
      {children}

      {isPending && <span>...</span>}
    </StyledButton>
  );
};

const variants = {
  primary: css`
    background-color: var(--primary);
    color: var(--white);

    &:hover {
      background-color: var(--blue);
    }
  `,
  secondary: css`
    background-color: var(--secondary);
    color: var(--white);

    &:hover {
      background-color: var(--purple);
    }
  `,
  ghost: css`
    background-color: transparent;
    padding-inline: 0;
    color: var(--gray);

    &:hover {
      color: var(--primary);
    }
  `,
};

type Variant = keyof typeof variants;

const StyledButton = styled.button<{ $variant: Variant }>`
  border: 0;
  cursor: pointer;
  font-weight: 500;
  font-size: ${rem(14)};
  border-radius: ${rem(4)};
  padding: ${rem(12)} ${rem(16)};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.25s ease, color 0.25s ease;
  min-width: ${rem(97)};

  ${({ $variant }) => variants[$variant]}

  &:focus-visible {
    outline: 2px solid var(--primary);
    outline-offset: 2px;
  }

  @media (min-width: 768px) {
    padding: ${rem(14)} ${rem(25)};
    font-size: ${rem(16)};
    border-radius: var(--rounded);
    min-width: ${rem(123)};
  }
`;

export default Button;
