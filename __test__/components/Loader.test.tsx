import React from 'react';
import { render } from '@testing-library/react';

import Loader from '@shared/ui/loader';

describe('<Loader/>', () => {
  it('Render loader', () => {
    const { queryByTestId } = render(<Loader />);

    expect(queryByTestId('loader')).toBeTruthy();
  });
});
