import Header from './Header.tsx';
import { render, screen } from '@testing-library/react';

test('Header contains the title text provided in props', () => {
  render(<Header title='test-header-title' />);
  expect(screen.getByText('test-header-title')).toBeInTheDocument();
});
