document.addEventListener('DOMContentLoaded', function () {
    const recipeForm = document.getElementById('recipe-form');
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const query = urlParams.get('query');

    if (query) {
        fetchRecipes(query);
    }

    recipeForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const query = document.getElementById('query').value;
        fetchRecipes(query);
    });
});

function fetchRecipes(query) {
    const apiKey = '6b334534ab614c2b937b436673b6919e'; // Replace with your API key
    const url = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const recipes = data.results;
            const recipeResults = document.getElementById('recipe-results');
            recipeResults.innerHTML = '';

            recipes.forEach(recipe => {
                const recipeCard = document.createElement('div');
                recipeCard.classList.add('recipe-card');
                recipeCard.innerHTML = `
                    <img src="${recipe.image}" alt="${recipe.title}">
                    <h3>${recipe.title}</h3>
                `;
                recipeCard.addEventListener('click', () => {
                    fetchRecipeDetails(recipe.id);
                });
                recipeResults.appendChild(recipeCard);
            });
        })
        .catch(error => console.error('Error fetching recipes:', error));
}

function fetchRecipeDetails(id) {
    const apiKey = '6b334534ab614c2b937b436673b6919e'; // Replace with your API key
    const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const recipeDetail = document.getElementById('recipe-detail');
            recipeDetail.innerHTML = `
                <h2>${data.title}</h2>
                <img src="${data.image}" alt="${data.title}">
                <p>${data.instructions}</p>
            `;
            const modal = document.getElementById('recipe-modal');
            modal.style.display = 'block';
        })
        .catch(error => console.error('Error fetching recipe details:', error));
}

document.querySelector('.close').addEventListener('click', function () {
    const modal = document.getElementById('recipe-modal');
    modal.style.display = 'none';
});

window.addEventListener('click', function (event) {
    const modal = document.getElementById('recipe-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
