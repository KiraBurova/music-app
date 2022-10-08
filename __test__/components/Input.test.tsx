import React from 'react';
import { render } from '@testing-library/react';

import Input from '@shared/ui/input';

describe('<Input/>', () => {
  it('Render input with placeholder', () => {
    const { queryByPlaceholderText } = render(
      <Input placeholder="Placeholder of this input" />
    );

    expect(queryByPlaceholderText('Placeholder of this input')).toBeTruthy();
  });
});
