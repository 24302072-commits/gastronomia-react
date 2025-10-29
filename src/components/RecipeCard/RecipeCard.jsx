const RecipeCard = ({ recipe }) => {
  // Verificar que recipe existe antes de usarlo
  if (!recipe) {
    return (
      <div className="prinImg">
        <h2>Receta no disponible</h2>
        <p>No se pudo cargar la información de la receta.</p>
      </div>
    );
  }

  return (
    <div 
      className="prinImg"
      style={{
        // SOLO el background image aquí, todo lo demás en CSS
        backgroundImage: recipe.image ? `linear-gradient(to bottom, rgba(221, 0, 0, 0) 10%, rgb(51, 51, 51) 90%), url(${recipe.image})` : 'linear-gradient(to bottom, rgba(221, 0, 0, 0) 10%, rgb(51, 51, 51) 90%)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'left'
      }}
    >
      <h2>{recipe.title || 'Título no disponible'}</h2>
      
      <p>{recipe.description || 'Descripción no disponible'}</p>

      {recipe.ingredientsTitle && <h3>{recipe.ingredientsTitle}</h3>}
      {recipe.ingredients && (
        <ul className="receta">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      )}

      {recipe.preparationTitle && <h3>{recipe.preparationTitle}</h3>}
      {recipe.steps && (
        <ol className="receta">
          {recipe.steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default RecipeCard;