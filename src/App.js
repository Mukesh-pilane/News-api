import './App.css';
import Navbar from "./components/navbar/Navbar"
import Card from "./components/card/Card"
import Footer from "./components/footer/Footer"
import {useState, useEffect} from 'react';
import Typography from '@material-ui/core/Typography';

function App() {
  const [articles, setArticles] = useState([]);
  const [term, setTerm] = useState('india');
  const [isloading, setLoading] = useState(true);
  
  useEffect(() => {
    const apikey= process.env.REACT_APP_API_KEY
    const url = `https://newsapi.org/v2/everything?q=${term}&apiKey=${apikey}`;
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setArticles(json.articles)
        setLoading(false)
        console.log(response)
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
}, [term]);

  return (
    <div className="App">
        <Navbar 
        onSet={(input)=>{setTerm(input); setLoading(true);
        }}/>
        {isloading ? (
        <Typography
        align='center'
        >Loading...
        </Typography>)
        :
      <>
     <div className="Grid">
 {articles.map((article, index) =>{
           return <Card key ={index} article = {article}/>
          })}
          </div>
        <Footer />
        
        </>
        }
    </div>
  );
}

export default App;
