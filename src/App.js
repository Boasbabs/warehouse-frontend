import { Layout } from './base-components';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default App;
