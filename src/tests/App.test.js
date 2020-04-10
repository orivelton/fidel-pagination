import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

describe('component App', () => {
  test('render component App', () => {
    const { container } = render(<App />);
    expect(container).not.toBeNull();
    expect(container.firstChild).toMatchSnapshot();
  });
});
