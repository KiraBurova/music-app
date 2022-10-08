import React from 'react';
import { render } from '@testing-library/react';

import BigCard from '../../shared/ui/big-card';

describe('<BigCard/>', () => {
  it('Render card with content', () => {
    const { getByText } = render(
      <BigCard>
        <div>Content of a big card</div>
      </BigCard>
    );
    expect(getByText('Content of a big card')).toBeTruthy();
  });
});
