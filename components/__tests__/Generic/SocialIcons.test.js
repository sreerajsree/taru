import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import SocialIcons from '../../Generic/SocialIcons';

describe('SocialIcons', () => {
  test('matches snapshot', () => {
    const { asFragment } = render(<SocialIcons />);
    expect(asFragment()).toMatchSnapshot();
  });
});
