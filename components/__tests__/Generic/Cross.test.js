import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Cross from '../../Generic/Cross';

describe('Cross', () => {
  test('calls passed in function when the Cross is clicked', () => {
    const mockedOnClick = jest.fn();
    render(<Cross onClick={mockedOnClick} />);

    expect(screen.getByRole('button')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button'));
    expect(mockedOnClick.mock.calls.length).toBe(1);
  });
});
