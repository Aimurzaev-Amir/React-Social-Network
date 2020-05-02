import React from 'react';
import { render } from '@testing-library/react';
// import App from './App';
import BeAbleJSApp from './App';

test('renders learn react link', () => {
  const { getByText } = render(<BeAbleJSApp />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
