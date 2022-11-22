import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ExternalLink from '../../Generic/ExternalLink';

describe('ExternalLink', () => {
  test('the link is created with the correct children and href', () => {
    const href = 'href';
    render(<ExternalLink href={href} className="" style={{}}>Link Text</ExternalLink>);

    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', href);
    expect(screen.getByText('Link Text')).toBeInTheDocument();
  });
  test('the link opens in a new tab and contains the noopener and noferrer rel', () => {
    render(<ExternalLink href="" className="" style={{}}>Link Text</ExternalLink>);

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    expect(link).toHaveAttribute('target', '_blank');
  });
});
