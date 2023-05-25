
import './App.css';
import Header from './components/header';
import Layout from './components/layout';
import Filters from './components/filters';
import CharacterList from './components/character-list';

function App() {
  return (
    <div className="App">
      <Header />
      <Layout>
        <Filters />
        <CharacterList />
      </Layout>
    </div>
  );
}

export default App;
