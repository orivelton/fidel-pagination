import React from 'react';
import { render } from '@testing-library/react';
import Modal from '../Components/Modal';

describe('component Modal', () => {
  const props = {
    "card": {
      "lastNumbers": "4009",
      "scheme": "visa"
    },
    "location": {
      "address": "Google Street 4",
      "city": "Angular4"
    },
    "identifiers": {
      "MID": "770055002234"
    }
  };

  test('render component Modal', () => {
    const { container } = render(<Modal currentItem={props} />);
    expect(container).not.toBeNull();
    expect(container.firstChild).toMatchSnapshot();
  });
});
