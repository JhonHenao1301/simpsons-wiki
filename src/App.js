
import Header from './components/header';
import Layout from './components/layout';
import Filters from './components/filters';
import CharacterList from './components/character-list';
import { useState, useEffect } from 'react';

function App() {

  const [ fetchedData, updateFetchedData ] = useState([]);
  const { docs } = fetchedData;
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState('')
  const [gender, setGender] = useState('')

  const api = `https://apisimpsons.fly.dev/api/personajes?limit=200`

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
      <Header setSearch={setSearch} />
      <Layout>
        <Filters setStatus={setStatus} setGender={setGender} />
        <CharacterList docs={docs} status={status} gender={gender} search={search} />
      </Layout>
    </div>
  );
}

export default App;
