
import Header from './components/header';
import Layout from './components/layout';
import Filters from './components/filters';
import CharacterList from './components/character-list';
import { useState, useEffect } from 'react';

function App() {

  const [ fetchedData, updateFetchedData ] = useState([]);
  const { docs } = fetchedData;

  const api = `https://apisimpsons.fly.dev/api/personajes?limit=${20}`

  useEffect(() => {
    (async function() {
      // setLoading(true)
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data)
      // setLoading(false)
    })();
  }, [api]);

  return (
    <div className="App">
      <Header />
      <Layout>
        <Filters />
        <CharacterList docs={docs} />
      </Layout>
    </div>
  );
}

export default App;
