import './App.css';
import RecipeCard from './components/RecipeCard/RecipeCard';
import CocktailSection from './components/CocktailSection/CocktailSection';

function App() {
  // Array con las 6 recetas
  const allRecipes = [
    {
      title: "Pilaf (Arroz Sazonado)",
      description: "El pilaf, también conocido como arroz sazonado, es una preparación culinaria con orígenes milenarios que se remontan a la antigua Persia (actual Irán). Desde allí se expandió por toda Asia Central, el Medio Oriente y el Mediterráneo a través de rutas comerciales y conquistas. Su nombre deriva del persa polow o pilaw, y su técnica de cocción — tostar el arroz en grasa antes de cocerlo al vapor — fue perfeccionada durante el Imperio Otomano. Llegó a Europa mediante intercambios culturales y hoy existen variaciones en países como España (paella), India (pulao), México (arroz rojo) y el Caribe. Su esencia radica en la versatilidad para integrar especias, carnes y vegetales según la región.",
      ingredientsTitle: "Ingredientes para preparar Pilaf (4 porciones)",
      ingredients: [
        "1 taza de arroz de grano largo (basmati o jasmine)",
        "2 tazas de caldo de pollo o verduras",
        "1 cebolla mediana picada finamente",
        "2 dientes de ajo machacados",
        "1 zanahoria rallada o en cubos pequeños",
        "3 cucharadas de aceite de oliva o mantequilla",
        "Especias: 1 cucharadita de comino, 1 rama de canela, 2 bayas de cardamomo (opcional)",
        "Sal y pimienta al gusto",
        "Opcional: guisantes, almendras fileteadas, pasas o pollo desmenuzado"
      ],
      preparationTitle: "Preparación paso a paso",
      steps: [
        "Lavar el arroz: Enjuaga el arroz bajo agua fría hasta que el agua salga clara. Esto elimina el almidón y evita que se pegue.",
        "Sofreír aromáticos: En una olla amplia, calienta el aceite o mantequilla. Saltea la cebolla y el ajo hasta que estén dorados y fragantes.",
        "Tostar el arroz: Agrega el arroz escurrido y las especias (comino, canela, cardamomo). Revuelve 2-3 minutos hasta que el arroz tenga un tono dorado claro.",
        "Cocer al vapor: Vierte el caldo caliente y añade sal. Lleva a ebullición, tapa la olla y cocina a fuego bajo por 15-18 minutos. No destapes durante la cocción.",
        "Reposar y servir: Apaga el fuego y deja reposar 5 minutos. Con un tenedor, esponja el arroz suavemente. Decora con almendras o perejil fresco."
      ],
      image: "/imagenes/IMG1.jpeg"
    },
    {
      title: "Arroz Frito con Camarones en Piña",
      description: "El arroz frito es un plato de origen chino, con más de 1,500 años de historia, que surgió como una forma de aprovechar las sobras de arroz cocido. Su versión con camarones se popularizó en las regiones costeras del sur de China y el sudeste asiático. La presentación en una piña vacía es una innovación moderna que combina influencias tailandesas y malayas, donde la fruta se utiliza tanto para marinar proteínas como para servir. Este estilo festivo y tropical refleja la fusión de técnicas de cocina asiática con ingredientes locales, destacando por equilibrar lo salado del arroz frito con el dulzor natural de la piña.",
      ingredientsTitle: "Ingredientes (Para 4 porciones)",
      ingredients: [
        "3 tazas de arroz blanco cocido y frío (preferiblemente del día anterior)",
        "300 g de camarones medianos, pelados y desvenados",
        "1 piña madura pero firme",
        "1 cebolla morada en cubos pequeños",
        "2 dientes de ajo picados",
        "1 zanahoria en cubos pequeños",
        "½ taza de arvejas (guisantes)",
        "2 cucharadas de salsa de soya",
        "1 cucharada de aceite de sésamo",
        "2 cebollines (cebolla verde) picados",
        "2 huevos batidos",
        "Aceite vegetal para freír",
        "Sal y pimienta al gusto"
      ],
      preparationTitle: "Preparación paso a paso",
      steps: [
        "Preparar la piña: Corta la piña a lo largo, dejando las hojas unidas a ambas mitades. Vacía el interior con un cuchillo y una cuchara, reservando la pulpa. Corta la pulpa en cubos pequeños (elimina el corazón duro).",
        "Saltear los ingredientes: Calienta 2 cucharadas de aceite en un wok o sartén grande. Saltea los camarones por 2 minutos hasta que se doren. Retira y reserva. En el mismo wok, agrega ajo y cebolla hasta que estén fragantes. Añade zanahoria y arvejas, saltea 3 minutos.",
        "Integrar el arroz: Incorpora los huevos batidos y revuelve rápidamente. Agrega el arroz frío, desmenuzándolo con las manos. Saltea a fuego alto 4 minutos, mezclando constantemente.",
        "Sazonar y finalizar: Añade los cubos de piña reservados, camarones, salsa de soya, salsa de ostras, jengibre y aceite de sésamo. Mezcla todo 2 minutos más. Rectifica sal si es necesario.",
        "Servir: Rellena las mitades de piña con el arroz frito caliente. Decora con cebollín picado y acompáñalo con láminas de tortilla frita (opcional)."
      ],
      image: "/imagenes/IMG2.jpeg"
    },
    {
      title: "Solomillo con Arroz Campestre",
      description: "El solomillo con arroz campestre es un plato de origen europeo que combina el lujo de la carne de res con la rusticidad del campo. El solomillo (corte del lomo bajo de la res) ha sido históricamente apreciado por su terneza, siendo protagonista en la alta cocina francesa desde el siglo XIX. Por otro lado, el 'arroz campestre' o riz paysanne surge como una preparación humilde en las zonas rurales de Francia y España, donde se aprovechaban vegetales de la huerta y hierbas aromáticas para crear guarniciones sustanciosas. La fusión de ambos elementos representa la unión entre la cocina refinada urbana y las tradiciones rurales, creando un equilibrio entre sofisticación y sencillez. Hoy es un clásico en restaurantes de comida 'casera gourmet'.",
      ingredientsTitle: "Ingredientes (Para 4 personas)",
      ingredients: [
        "4 filetes de solomillo de res (200 g c/u, 2.5 cm de grosor)",
        "3 cucharadas de aceite de oliva extra virgen",
        "4 dientes de ajo machacados",
        "2 ramas de romero fresco",
        "Sal gruesa y pimienta negra molida al gusto",
        "50 ml de vino tinto (opcional)",
        "50 ml de caldo de res",
        "1½ tazas de arroz de grano largo",
        "1 cebolla cabezona picada en cubos pequeños",
        "1 zanahoria rallada",
        "½ pimiento rojo en cubos",
        "½ taza de champiñones laminados",
        "½ taza de guisantes (arvejas) frescos o congelados",
        "3 tazas de caldo de vegetales",
        "2 cucharadas de mantequilla",
        "1 hoja de laurel",
        "Perejil fresco picado para decorar"
      ],
      preparationTitle: "Preparación paso a paso",
      steps: [
        "Marinar la carne: Sellar los filetes con sal y pimienta generosamente. En un bowl mezclar el aceite de oliva, ajo machacado y romero. Cubrir la carne con esta mezcla y dejar marinar 30 minutos.",
        "Preparar el arroz campestre: Derretir la mantequilla en una olla a fuego medio. Sofreír la cebolla, zanahoria y pimiento por 5 minutos hasta ablandar. Añadir los champiñones y guisantes, cocinar 3 minutos más. Incorporar el arroz y revolver 2 minutos hasta que se torne ligeramente transparente. Verter el caldo caliente, agregar la hoja de laurel y cocinar tapado a fuego bajo por 18-20 minutos. Al final, retirar el laurel y esponjar el arroz con un tenedor.",
        "Cocinar el solomillo: Calentar una sartén de hierro a fuego alto con 1 cucharada de aceite. Sellar los filetes 3-4 minutos por cada lado para un término medio. Retirar la carne y dejar reposar 5 minutos cubierta con aluminio.",
        "Preparar la salsa (opcional): En la misma sartén, agregar el vino tinto para desglasar los jugos de la carne. Añadir el caldo de res y reducir por 2 minutos.",
        "Servir: Colocar una cama de arroz campestre en cada plato. Disponer el filete sobre el arroz y bañar con la salsa. Decorar con perejil fresco picado."
      ],
      image: "/imagenes/IMG3.jpeg"
    }, {
  title: "Salmorejo con Alubias",
  description: "El salmorejo es una preparación ancestral de la región de Andalucía, España, especialmente de Córdoba, donde se documenta desde el siglo XIX como evolución de los gazpachos y papas frías campesinas. Originalmente era un alimento humilde de agricultores, elaborado con pan duro, ajo, aceite de oliva y vinagre. La adición de alubias (judías blancas) surge en el norte de España —especialmente en Asturias y León— como forma de enriquecer el plato con proteínas, creando una versión más sustancial que combina la frescura mediterránea con la contundencia de la cocina del interior. Hoy, esta fusión representa la adaptación de recetas regionales a ingredientes locales, ideal para climas fríos y calurosos.",
  ingredientsTitle: "Ingredientes (4 personas)",
  ingredients: [
    "1 kg de tomates maduros",
    "200 g de pan de hogaza (preferiblemente del día anterior)",
    "150 ml de aceite de oliva virgen extra",
    "1 diente de ajo",
    "1 cucharadita de sal",
    "1 cucharada de vinagre de Jerez",
    "300 g de alubias blancas cocidas",
    "100 g de jamón serrano en taquitos",
    "1 cebolla pequeña picada",
    "1 hoja de laurel",
    "Pimentón dulce",
    "Caldo de verduras o agua"
  ],
  preparationTitle: "Preparación paso a paso",
  steps: [
    "Preparar el salmorejo: Escaldar los tomates 1 minuto en agua hirviendo, pelarlos y eliminar semillas. Remojar el pan en agua durante 10 minutos y escurrir bien. En una batidora, triturar los tomates, el pan, el ajo, la sal y el vinagre. Sin dejar de batir, incorporar lentamente el aceite de oliva hasta obtener una crema suave. Colar si se desea textura fina, y refrigerar al menos 2 horas.",
    "Preparar las alubias: En una sartén, sofreír la cebolla con un poco de aceite hasta que transparente. Añadir el jamón serrano y dorar ligeramente. Incorporar las alubias cocidas, el laurel y una pizca de pimentón. Cubrir con caldo y cocinar 10 minutos a fuego suave hasta que espese ligeramente.",
    "Servir: En un plato hondo, verter una base de salmorejo frío. Colocar en el centro una porción de alubias calientes. Decorar con huevo duro picado y virutas de jamón."
  ],
  image: "/imagenes/IMG4.jpeg"
},
{
  title: "Paté de Hígado de Ave",
  description: "El paté de hígado de ave tiene sus raíces en la antigua Roma, donde se preparaban pastas de hígado mezcladas con vino y especias, pero fue en la Francia medieval donde evolucionó hacia la forma que conocemos hoy. Los campesinos utilizaban las vísceras de las aves (patos, gansos o pollos) para crear un alimento nutritivo y conservable. En el siglo XVIII, los chefs franceses refinaron la técnica, añadiendo mantequilla y licores, convirtiéndolo en un manjar de la alta cocina. La versión más famosa, el foie gras, se popularizó en el suroeste de Francia, aunque el paté tradicional de hígado de pollo o pavo se mantuvo como una alternativa accesible. Hoy es símbolo de elegancia en entremeses y celebraciones.",
  ingredientsTitle: "Ingredientes (Para 6-8 porciones)",
  ingredients: [
    "500 g de hígado de pollo o pavo limpio",
    "1 cebolla picada en cubos pequeños",
    "2 dientes de ajo picados",
    "200 g de mantequilla sin sal (100 g fría, 100 g derretida)",
    "3 cucharadas de aceite de oliva",
    "2 cucharadas de brandy, coñac o jerez",
    "1 cucharadita de tomillo fresco",
    "½ cucharadita de nuez moscada rallada",
    "Sal y pimienta negra al gusto",
    "2 hojas de laurel"
  ],
  preparationTitle: "Preparación paso a paso",
  steps: [
    "Limpiar y marinar los hígados: Retirar nervios y grasa visible de los hígados. Mezclar con el brandy, tomillo, nuez moscada, sal y pimienta. Dejar marinar 20 minutos.",
    "Saltear los ingredientes: En una sartén, calentar el aceite y 50 g de mantequilla. Dorar la cebolla y el ajo hasta que estén transparentes. Añadir los hígados escurridos y las hojas de laurel. Cocinar 8-10 minutos hasta que pierdan el color rosado. Retirar el laurel y verter el brandy del marinado. Flambear (opcional) o cocinar 1 minuto más.",
    "Triturar y emulsionar: Colocar la mezcla en la licuadora o procesador de alimentos. Agregar 100 g de mantequilla fría en cubos y procesar hasta obtener una pasta suave. Corregir sazón si es necesario.",
    "Enmoldar y refrigerar: Transferir la mezcla a moldes individuales o uno grande. Alisar la superficie y cubrir con la mantequilla derretida restante para sellar. Decorar con tomillo o pimientas. Refrigerar 4-6 horas (preferiblemente toda la noche) hasta que esté firme.",
    "Servir: Desmoldar y acompañar con pan tostado o galletas. Si se usa un molde grande, servir en porciones con una cuchara caliente."
  ],
  image: "/imagenes/IMG5.jpeg"
},
{
  title: "Aderezo Ranch y Aderezo Mil Islas con Bastones de Verduras",
  description: "Aderezo Ranch: Creado en la década de 1950 por Steve Henson, un contratista de Alaska que luego abrió un rancho turístico en California (Hidden Valley Ranch). Originalmente era una mezcla seca de especias que los clientes mezclaban con suero de leche y mayonesa. Su popularidad creció tanto que en 1972 la compañía Clorox compró la marca y lo lanzó como aderezo embotellado, convirtiéndose en el más vendido de Estados Unidos desde 1992. Aderezo Mil Islas: Su origen data de principios del siglo XX en los hoteles de lujo de la región de las Mil Islas (entre Estados Unidos y Canadá). La leyenda más aceptada atribuye su creación al actor George Boldt, dueño del Waldorf-Astoria, quien lo sirvió por primera vez en su hotel alrededor de 1900. Se distingue por incluir ingredientes finos como pepinillos y huevo duro.",
  ingredientsTitle: "Ingredientes",
  ingredients: [
    "1 taza de mayonesa",
    "½ taza de suero de leche (buttermilk)",
    "2 cucharadas de perejil fresco picado",
    "1 cucharadita de eneldo seco",
    "1 cucharadita de cebollín fresco picado",
    "½ cucharadita de ajo en polvo",
    "½ cucharadita de cebolla en polvo",
    "1 cucharada de jugo de limón",
    "Sal y pimienta negra al gusto",
    "1 taza de mayonesa",
    "¼ taza de salsa kétchup",
    "2 cucharadas de relish de pepinillos (o pepinillos finamente picados)",
    "1 cucharadita de salsa Worcestershire",
    "1 huevo duro picado finamente",
    "1 cucharada de cebolla roja finamente picada",
    "1 cucharadita de vinagre de vino tinto",
    "½ cucharadita de páprika"
  ],
  preparationTitle: "Preparación",
  steps: [
    "Aderezo Ranch: En un tazón, mezclar la mayonesa con el suero de leche hasta integrar completamente. Añadir el perejil, eneldo, cebollín, ajo en polvo y cebolla en polvo. Incorporar el jugo de limón, sal y pimienta. Refrigerar por al menos 1 hora antes de servir para que los sabores se integren.",
    "Aderezo Mil Islas: En un bowl, combinar la mayonesa con el kétchup hasta lograr un color rosado uniforme. Agregar el relish de pepinillos, salsa Worcestershire, huevo duro y cebolla roja. Mezclar suavemente con el vinagre y la páprika. Enfriar 30 minutos antes de servir.",
    "Preparación de bastones: Pelar las zanahorias y cortarlas en bastones de 8-10 cm de largo. Lavar el apio y cortar en bastones del mismo tamaño. Sumergir en agua con hielo durante 15 minutos para mantener su textura crujiente. Escurrir y servir en un plato junto con los aderezos."
  ],
  image: "/imagenes/IMG6.jpeg"
}
  ];

  return (
    <div className="App">
      <header>
        <p id="tittle">Platillos Gourmet</p>
      </header>

      {/* NUEVA SECCIÓN DE COCTELES */}
      <CocktailSection />
      
      <br /><br /><br /><br />

      {/* SECCIÓN DE RECETAS*/}
      {allRecipes.map((recipe, index) => (
        <div key={index}>
          <RecipeCard recipe={recipe} />
          <br /><br /><br /><br />
        </div>
      ))}
    </div>
  );
}

export default App;