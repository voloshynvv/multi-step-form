import { render, screen } from '@testing-library/react';

import Sidebar from '~/components/Sidebar/Sidebar';

describe('Sidebar', () => {
  it('should render Sidebar with given steps', () => {
    const steps = ['step-1', 'step-2', 'step-3', 'step-4'];

    render(<Sidebar steps={steps} />);

    expect(screen.getByRole('complementary')).toBeInTheDocument();
  });
});
