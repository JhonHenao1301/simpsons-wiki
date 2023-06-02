
import Header from './components/header';
import Layout from './components/layout';
import Filters from './components/filters';
import Pagination from './components/pagination';
import CharacterList from './components/character-list';
import { useState, useEffect } from 'react';

function App() {

  const [ fetchedData, updateFetchedData ] = useState([]);
  const { docs, result, totalPages, totalDocs } = fetchedData;
  const [ limit, setLimit ] = useState(12)
  const [ search, setSearch ] = useState('')
  const [ pageNumber, setPageNumber] = useState(1)
  const [ status, setStatus ] = useState('')
  const [ gender, setGender ] = useState('')

  const api = `https://apisimpsons.fly.dev/api/personajes?limit=${limit}&page=${pageNumber}/find/${search}`

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
      <Header setSearch={setSearch} setLimit={setLimit} totalDocs={totalDocs} />
      <Layout>
        <Filters setStatus={setStatus} setGender={setGender} />
        <CharacterList docs={(result) ? result : docs} status={status} gender={gender} search={search} />
      </Layout>
      <Pagination setPageNumber={setPageNumber} info={result} totalPages={totalPages} />
    </div>
  );
}

export default App;
