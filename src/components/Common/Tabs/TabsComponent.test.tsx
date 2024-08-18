import { render, screen, fireEvent } from '@testing-library/react';
import TabsComponent from './TabsComponent';

describe('TabsComponent Component', () => {
  const labelComponentMappings = [
    { label: 'Tab-1', component: <div>Content 1</div> },
    { label: 'Tab-2', component: <div>Content 2</div> },
    { label: 'Tab-3', component: <div>Content 3</div> },
  ];

  test('Renders all tabs correctly with first tab opened by default', () => {
    render(<TabsComponent labelComponentMappings={labelComponentMappings} />);
    expect(screen.getByTestId('tab-Tab-1')).toBeInTheDocument();
  });

  test('Should display the correct content for each tab', () => {
    render(<TabsComponent labelComponentMappings={labelComponentMappings} />);
    const tab2 = screen.getByText('Tab-2');
    fireEvent.click(tab2);
    expect(screen.getByText('Content 2')).toBeInTheDocument();
    const tab1 = screen.getByText('Tab-1');
    fireEvent.click(tab1);
    expect(screen.getByText('Content 1')).toBeInTheDocument();
  });
});
