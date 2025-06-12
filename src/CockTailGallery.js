import React from 'react';
import './CocktailGallery.css';

const cocktails = [
  {
    name: "Mojito",
    img: "https://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg",
    description: "A refreshing Cuban classic with mint, lime, and rum. Perfect for hot days and tropical vibes."
  },
  {
    name: "Margarita",
    img: "https://www.thecocktaildb.com/images/media/drink/wpxpvu1439905379.jpg",
    description: "A tangy and salty tequila-based cocktail. Best enjoyed with Mexican food and sunsets."
  },
  {
    name: "Old Fashioned",
    img: "https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg",
    description: "A timeless whiskey cocktail with bitters and sugar. Strong, bold, and smooth."
  },
  {
    name: "Martini",
    img: "https://www.thecocktaildb.com/images/media/drink/71t8581504353095.jpg",
    description: "A sophisticated mix of gin and vermouth. Dry, sharp, and elegant — James Bond’s favorite."
  },
];

const CocktailGallery = () => {
  return (
    <div className="cocktail-gallery">
      <h2>Famous Cocktails</h2>
      <div className="cocktail-list">
        {cocktails.map((cocktail) => (
          <div key={cocktail.name} className="cocktail-card">
            <img src={cocktail.img} alt={cocktail.name} />
            <p><strong>{cocktail.name}</strong></p>
            <p className="description">{cocktail.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CocktailGallery;
