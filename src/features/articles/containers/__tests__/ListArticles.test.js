import React from 'react';
import { render, screen, waitFor } from 'utils/test-utils';

import { ListArticles } from 'features';

describe('ListArticles', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  test('render without crashing', async () => {
    render(<ListArticles />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });

  test('show list of articles fetched from the API', async () => {
    render(<ListArticles />);

    const allArticles = await screen.findAllByTestId('articles-row-item');
    expect(allArticles).toHaveLength(3);

    await waitFor(() => {
      expect(screen.getByText(/Table Top/i)).toBeInTheDocument();
    });

    expect(screen.getByText('Seat')).toBeInTheDocument();
    expect(screen.getByText('Screw')).toBeInTheDocument();
  });
});
