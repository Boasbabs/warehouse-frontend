import React from 'react';
import { render, screen, waitFor } from 'utils/test-utils';

import { ListSales } from 'features';

describe('ListSales', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  test('render without crashing', async () => {
    render(<ListSales />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });

  test('show list of sales fetched from the API', async () => {
    render(<ListSales />);

    const allSales = await screen.findAllByTestId('sales-row-item');
    expect(allSales).toHaveLength(1);

    await waitFor(() => {
      expect(screen.getByText('a269a247-0d38-4b47-9630-79c9ae545b68')).toBeInTheDocument();
    });
  });
});
