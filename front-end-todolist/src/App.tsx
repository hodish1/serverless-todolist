import { Layout } from './components/Layout';
import { LayoutHOC } from './components/LayoutHOC';

function App() {
  return (
    <LayoutHOC>
      <Layout />
    </LayoutHOC>
  );
}

export default App;
