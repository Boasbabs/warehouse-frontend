import React from 'react';
import { render as rtlRender, queries } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import store from 'application/store';

function render(ui, { initialState, ...renderOptions } = {}) {
  const history = createMemoryHistory();

  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <Router location={history.location} navigator={history}>
          {children}
        </Router>
      </Provider>
    );
  }
  return {
    ...rtlRender(ui, {
      wrapper: Wrapper,
      queries: { ...queries },
      ...renderOptions
    }),
    store
  };
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
