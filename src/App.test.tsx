import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders headline', () => {
    const title = 'React';
    render(<App title={title} />);
    expect(screen.getByRole('heading')).toHaveTextContent(title);

    screen.debug();
  });
});
