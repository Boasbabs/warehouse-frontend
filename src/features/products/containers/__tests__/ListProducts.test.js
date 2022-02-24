import React from 'react';
import { render, screen, waitFor } from 'utils/test-utils';

import { ListProducts } from 'features';

describe('ListProducts', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  test('render without crashing', async () => {
    render(<ListProducts />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });

  test('show list of products fetched from the API', async () => {
    render(<ListProducts />);

    const allProducts = await screen.findAllByTestId('products-row-item');
    expect(allProducts).toHaveLength(2);

    await waitFor(() => {
      expect(screen.getByText('Dining Chair')).toBeInTheDocument();
    });

    expect(screen.getByText('Dining Table')).toBeInTheDocument();
  });
});
