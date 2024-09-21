import styled from 'styled-components';
import { Status } from '~/hooks/useSubmitForm';

import { rem } from '~/styles/mixins';

interface Props {
  status: Status;
}

const FormStatusView = ({ status }: Props) => {
  return (
    <Styled>
      <Icon src="/icons/thank-you.svg" alt="" />

      <h2>{status === 'success' ? 'Thank you!' : 'Opps, something went wrong!'}</h2>

      {status === 'success' ? (
        <p>
          Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support,
          please feel free to email us at <a href="mailto:support@loremgaming.com">support@loremgaming.com.</a>
        </p>
      ) : (
        <p>Please, try again later :(</p>
      )}
    </Styled>
  );
};

const Styled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;

  @media (min-width: 768px) {
    padding-bottom: ${rem(24)};
  }
`;

const Icon = styled.img`
  width: ${rem(50)};
  height: ${rem(50)};
  margin-bottom: ${rem(10)};

  @media (min-width: 768px) {
    margin-bottom: ${rem(32)};
    width: ${rem(80)};
    height: ${rem(80)};
  }
`;

export default FormStatusView;
