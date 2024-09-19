import { render, screen } from '@testing-library/react';

import Sidebar from '~/components/Sidebar/Sidebar';

describe('Sidebar', () => {
  it('should render Sidebar', () => {
    render(<Sidebar />);

    expect(screen.getByRole('complementary')).toBeInTheDocument();
  });
});
