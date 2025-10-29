export const cocktailApi = {
  // Obtener coctel aleatorio
  getRandomCocktail: async () => {
    try {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
      const data = await response.json();
      return data.drinks[0];
    } catch (error) {
      console.error('Error fetching random cocktail:', error);
      return null;
    }
  },

  // Obtener categorías de cocteles
  getCategories: async () => {
    try {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
      const data = await response.json();
      return data.drinks || [];
    } catch (error) {
      console.error('Error fetching categories:', error);
      return [];
    }
  },

  // Obtener cocteles por categoría
  getCocktailsByCategory: async (category) => {
    try {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);
      const data = await response.json();
      return data.drinks || [];
    } catch (error) {
      console.error('Error fetching cocktails by category:', error);
      return [];
    }
  },

  // Obtener detalles de un coctel por ID
  getCocktailById: async (id) => {
    try {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
      const data = await response.json();
      return data.drinks[0];
    } catch (error) {
      console.error('Error fetching cocktail details:', error);
      return null;
    }
  }
};