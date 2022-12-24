import { render } from '@testing-library/react';
import { App } from './App';

it('should test', () => {
  const { getByText } = render(<App />);

  expect(getByText('Hello World')).toBeInTheDocument();
});
