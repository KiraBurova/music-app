import React from 'react';
import { render } from '@testing-library/react';

import Card from '@shared/ui/card';

describe('<Card/>', () => {
  it('Render card with content', () => {
    const { getByText } = render(
      <Card>
        <div>Content of a card</div>
      </Card>
    );

    expect(getByText('Content of a card')).toBeTruthy();
  });
});
