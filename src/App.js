import Header from './components/Header';
import './App.css';
import React,{useEffect, useState} from "react";
import Transactions from './components/Transactions';
import NewTransactionForm from './components/NewTransactionform';
import SearchForm from './components/searchForm';

function App() {
  const [transactions,setTransactions] = useState ([])
  const [search, setSearch] = useState("");

  useEffect(()=> {
    fetch("https://api.npoint.io/7b30209f83abd75e9ffe/transactions/")
    .then(response=>response.json())
    .then(trans=>setTransactions(trans))
  }, []);

  function handleUpdateOnSubmission(newTransaction) {
    setTransactions(transactions=> [...transactions,newTransaction])   

    const serverOptions={
      method:"POST",
      headers:{
        "Content Type": "application/json"
      },
      body:JSON.stringify(newTransaction)
    }
    fetch("https://api.npoint.io/7b30209f83abd75e9ffe/transactions/",serverOptions)
    .then((response=>response.json))
    .then(newItem=>setTransactions(transactions => [...transactions,newItem]))
    .catch(error=>console.log(error))
  }

  function handleSearch(value) {
    setSearch(value);
  }

  const filteredTransactions = transactions.filter(trans => {
    return trans.description.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="App">
     <Header />
     <SearchForm onSearch={handleSearch} placeholder="search for transaction" />
     <NewTransactionForm onSubmission={handleUpdateOnSubmission}/>
     <Transactions transactions={filteredTransactions}/>
    </div> 
  );
}

export default App;
