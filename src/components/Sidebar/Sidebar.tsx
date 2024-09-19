import styled from 'styled-components';

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
              <span>Step {i + 1}</span>
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
  flex: 0 0 10.75rem;
  padding: 2rem;

  @media (min-width: 768px) {
    border-radius: var(--rounded-md);
    flex: 0 0 17.125rem;
    padding-block-start: 2.5rem;
    background-image: url('/icons/bg-sidebar.svg');
  }
`;

const List = styled.ol`
  padding: 0;
  margin: 0;
  list-style-type: none;
  display: flex;
  justify-content: center;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-direction: column;
    gap: 1.25rem;
  }
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Circle = styled.div<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid;
  color: var(--white);
  border-radius: 50%;
  min-width: 2rem;
  height: 2rem;
  font-weight: 700;
  color: ${(props) => (props.$isActive ? 'var(--primary)' : 'var(--white)')};
  background-color: ${(props) => (props.$isActive ? 'var(--sky-blue)' : 'transparent')};
  border-color: ${(props) => (props.$isActive ? 'var(--sky-blue)' : 'var(--white)')};
`;

const Step = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }

  span {
    color: var(--light-blue);
    margin-bottom: 0.25rem;
    text-transform: uppercase;
    font-size: 0.75rem;
  }

  p {
    color: var(--white);
    font-size: 0.875rem;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 1px;
  }
`;

export default Sidebar;
