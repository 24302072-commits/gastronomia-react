import { useState, useEffect } from 'react';
import { cocktailApi } from '../../services/cocktailApi';
import './CocktailSection.css';

const CocktailSection = () => {
  const [randomCocktail, setRandomCocktail] = useState(null);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categoryCocktails, setCategoryCocktails] = useState([]);
  const [loading, setLoading] = useState(true);

  // Cargar coctel aleatorio y categorías al montar el componente
  useEffect(() => {
    loadInitialData();
  }, []);

  const loadInitialData = async () => {
    setLoading(true);
    
    // Cargar coctel aleatorio
    const random = await cocktailApi.getRandomCocktail();
    setRandomCocktail(random);
    
    // Cargar categorías
    const cats = await cocktailApi.getCategories();
    setCategories(cats);
    
    // Seleccionar primera categoría por defecto
    if (cats.length > 0) {
      setSelectedCategory(cats[0].strCategory);
      const categoryDrinks = await cocktailApi.getCocktailsByCategory(cats[0].strCategory);
      setCategoryCocktails(categoryDrinks.slice(0, 6)); // Mostrar solo 6
    }
    
    setLoading(false);
  };

  // Manejar cambio de categoría
  const handleCategoryChange = async (category) => {
    setSelectedCategory(category);
    setLoading(true);
    const drinks = await cocktailApi.getCocktailsByCategory(category);
    setCategoryCocktails(drinks.slice(0, 6));
    setLoading(false);
  };

  if (loading) {
    return <div className="cocktail-loading">Cargando cocteles...</div>;
  }

  return (
    <div className="cocktail-section">
      {/* Coctel Aleatorio del Día */}
      <div className="random-cocktail">
        <h2>Coctel del Día</h2>
        {randomCocktail && (
          <div className="cocktail-card featured">
            <img 
              src={randomCocktail.strDrinkThumb} 
              alt={randomCocktail.strDrink}
              className="cocktail-image"
            />
            <div className="cocktail-info">
              <h3>{randomCocktail.strDrink}</h3>
              <p><strong>Categoría:</strong> {randomCocktail.strCategory}</p>
              <p><strong>Vaso:</strong> {randomCocktail.strGlass}</p>
              <button 
                className="recipe-btn"
                onClick={() => alert(`Instrucciones: ${randomCocktail.strInstructions}`)}
              >
                Ver Receta
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Cocteles por Categoría */}
      <div className="category-cocktails">
        <h2>Cocteles por Categoría</h2>
        
        {/* Selector de categorías */}
        <div className="category-selector">
          <label>Selecciona una categoría: </label>
          <select 
            value={selectedCategory} 
            onChange={(e) => handleCategoryChange(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat.strCategory} value={cat.strCategory}>
                {cat.strCategory}
              </option>
            ))}
          </select>
        </div>

        {/* Grid de cocteles */}
        <div className="cocktails-grid">
          {categoryCocktails.map((cocktail) => (
            <div key={cocktail.idDrink} className="cocktail-card">
              <img 
                src={cocktail.strDrinkThumb} 
                alt={cocktail.strDrink}
                className="cocktail-image"
              />
              <h4>{cocktail.strDrink}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CocktailSection;