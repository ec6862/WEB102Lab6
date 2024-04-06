import { useState, useEffect } from 'react'
import './App.css'
import CoinInfo from './components/CoinInfo';

const API_KEY = import.meta.env.VITE_APP_API_KEY;

const App = () => {
  // list
  const [list,setList] = useState(null);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const searchItems = searchValue => {
    setSearchInput(searchValue);
    if (searchValue !== "") {
      const filteredData = Object.keys(list.Data).filter((item) =>
        Object.values(item)
        .join("")
        .toLowerCase()
        .includes(searchValue.toLowerCase())
      )
      setFilteredResults(filteredData)
    } else {
      setFilteredResults(Object.keys(list.Data))
    }
  }



  useEffect(() => {
    const fetchAllCoinData = async () => {
      const response = await fetch("https://min-api.cryptocompare.com/data/all/coinlist?", { headers: {
          authorization: `Apikey ${API_KEY}`
        }
      });
      const json = await response.json();
      console.log(json);
      setList(json);
    }
    fetchAllCoinData().catch(console.error);
  }
  , []);

  return (
    <div className='whole-page'>
      <h1>My Crypto List</h1>
      <input
        type="text"
        placeholder="Search"
        onChange={(inputString) => searchItems(inputString.target.value)}
      />
        <ul>
          {/* {list && Object.entries(list.Data).map(([coin]) =>
            list.Data[coin].PlatformType === "blockchain" ? (
              // <li key={list.Data[coin].FullName}>{list.Data[coin].FullName}</li>
              <CoinInfo
              image={list.Data[coin].ImageUrl}
              name={list.Data[coin].FullName}
              symbol={list.Data[coin].Symbol}
              />
              ) : null
            )} */}
          {searchInput.length > 0
            ? filteredResults.map((coin) => 
                list.Data[coin].PlatformType === "blockchain" ?
                  <CoinInfo
                    image={list.Data[coin].ImageUrl}
                    name={list.Data[coin].FullName}
                    symbol={list.Data[coin].Symbol}
                  />
                : null
              )
            : list && Object.entries(list.Data).map(([coin]) =>
                list.Data[coin].PlatformType === "blockchain" ?
                <CoinInfo
                  image={list.Data[coin].ImageUrl}
                  name={list.Data[coin].FullName}
                  symbol={list.Data[coin].Symbol}
                />
              : null
            )
          }  
        </ul>
    </div>
  )
}

export default App
