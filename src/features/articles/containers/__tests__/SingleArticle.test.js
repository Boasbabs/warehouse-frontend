import React from 'react';
import {
  render,
  screen,waitFor
} from 'utils/test-utils';

import SingleArticle from '../SingleArticle';

describe('SingleArticle', () => {
  const props = {
    match: {
      params: { articleId: 'addc65a8-c759-41d8-a18a-89fe446ad484' }
    }
  };

  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  test('render without crashing', async () => {
    render(<SingleArticle {...props} />);
    expect(screen.getByText('Single Article')).toBeInTheDocument();
  });
});
