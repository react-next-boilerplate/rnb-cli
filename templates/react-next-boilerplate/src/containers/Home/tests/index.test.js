import React from 'react';

import { render } from '@testing-library/react';

import Home from '..';

describe('<Home />', () => {
  it('Should render correctly', () => {
    const { container } = render(<Home t={jest.fn()} />);

    expect(container).toMatchSnapshot();
  });
});
