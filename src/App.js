import React, {useState, useEffect} from 'react';
import './App.css';
import Recipe from './Recipe';

const App = () => {


  const APP_ID = "YOUR APP ID ";
  const APP_KEY = "Your APP KEY";
  const API_URL = `https://api.edamam.com/search?q=banana&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    loadData();
  }, []);


 const loadData = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  return (
    <div className="App">
     {
        recipes.map((r,id) => (
          <Recipe key={id} title={r.recipe.title} image={r.recipe.image} calories={r.recipe.calories} />
        ))
      }
    </div>
  )
};

export default App;
