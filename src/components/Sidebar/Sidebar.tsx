import styled from 'styled-components';

import { rem } from '~/styles/mixins';

interface Props {
  steps: string[];
  activeStep: number;
}

const Sidebar = ({ steps, activeStep }: Props) => {
  return (
    <StyledSidebar>
      <List>
        {steps.map((step, i) => (
          <ListItem key={i}>
            <Circle $isActive={activeStep === i}>{i + 1}</Circle>

            <Step>
              <div>Step {i + 1}</div>
              <p>{step}</p>
            </Step>
          </ListItem>
        ))}
      </List>
    </StyledSidebar>
  );
};

const StyledSidebar = styled.aside`
  background: url('/icons/bg-sidebar-mobile.svg') center / cover;
  background-repeat: no-repeat;
  flex: 0 0 ${rem(172)};
  padding: ${rem(32)};

  @media (min-width: 768px) {
    border-radius: var(--rounded-md);
    flex: 0 0 ${rem(274)};
    padding-block-start: ${rem(40)};
    background-image: url('/icons/bg-sidebar.svg');
  }
`;

const List = styled.ol`
  padding: 0;
  margin: 0;
  list-style-type: none;
  display: flex;
  justify-content: center;
  gap: ${rem(16)};

  @media (min-width: 768px) {
    flex-direction: column;
    gap: ${rem(30)};
  }
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: ${rem(16)};
`;

const Circle = styled.div<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid;
  color: var(--white);
  border-radius: 50%;
  min-width: ${rem(32)};
  height: ${rem(32)};
  font-weight: 700;
  color: ${(props) => (props.$isActive ? 'var(--primary)' : 'var(--white)')};
  background-color: ${(props) => (props.$isActive ? 'var(--sky-blue)' : 'transparent')};
  border-color: ${(props) => (props.$isActive ? 'var(--sky-blue)' : 'var(--white)')};
`;

const Step = styled.div`
  display: none;
  line-height: normal;

  @media (min-width: 768px) {
    display: block;
  }

  div {
    color: var(--light-blue);
    display: block;
    margin-bottom: ${rem(5)};
    text-transform: uppercase;
    font-size: ${rem(12)};
  }

  p {
    color: var(--white);
    font-size: ${rem(14)};
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 1px;
  }
`;

export default Sidebar;
