import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import DateFormatter from '../../Generic/DateFormatter';

describe('DateFormatter', () => {
  test('parses the dateString to be month and year', () => {
    render(<DateFormatter dateString="2019-10-10T00:00:00" />);

    expect(screen.getByText('October, 2019')).toBeInTheDocument();
  });
});
