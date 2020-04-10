import React from 'react';
import { render } from '@testing-library/react';
import ItemList from '../Components/ItemList';

describe('component App', () => {
  test('render component ItemList', () => {
    const props = {
      "currency": "GBP",
      "programId": "2314f371-39b1-4c80-8040-4144ff1bad09",
      "id": "5f68d602-664a-493f-89d4-901a053077cb",
      "card": {
        "id": "61a401b5-5d92-402f-8d86-89dfa15b515b",
        "lastNumbers": "4009",
        "scheme": "visa"
      },
      "location": {
        "address": "Google Street 4"
      }
    };

    const { container } = render(<ItemList currentItem={props} />);
    expect(container).not.toBeNull();
    expect(container.firstChild).toMatchSnapshot();
  });
});
