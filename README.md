# Recipe Finder

## Introduction

Welcome to Recipe Finder, a web application designed to help users discover and explore a wide variety of delicious recipes tailored to their dietary preferences and culinary interests.

![image](https://github.com/Niyai/Recipe_App/assets/77027478/3c71cb86-650c-4563-adc1-4ac94060cba0)



- **Deployed Site:** [Recipe Finder](https://recipes.niyai.tech)
- **Final Project Blog Article:** 
- **Author's LinkedIn:**
  - [Niyi Akinwale][(https://www.linkedin.com/in/adeniyi-akinwale-b8173b176/)}]

### Inspiration

The inspiration for Recipe Finder came from my personal struggle to find diverse and interesting recipes that cater to my dietary preferences. With a busy lifestyle, I found it challenging to constantly come up with new meal ideas. This project aims to solve that problem by providing an easy-to-use platform that offers a plethora of recipes, personalized recommendations, and nutritional information.

![image](https://github.com/Niyai/Recipe_App/assets/77027478/b5c960ad-8564-420b-89c7-7869c42a3721)


## Technology & Architecture

Recipe Finder is built using a modern web development stack to ensure a seamless and responsive user experience.

### Frontend
- **HTML5 & CSS3:** For structuring and styling the web pages.
- **JavaScript:** For dynamic content and interactivity.
- **React.js:** To create a responsive and component-based user interface.

### Backend
- **Node.js & Express.js:** For server-side logic and API endpoints.
- **MongoDB:** To store user data and recipes efficiently.

### Architecture
The application follows a RESTful architecture, with clear separation between the frontend and backend. The frontend communicates with the backend via API calls to fetch and display data dynamically.

### Core Algorithms

The core algorithm powering the recipe search functionality is based on a combination of keyword matching and filtering techniques. Below is a snippet of the search algorithm:

```javascript
function searchRecipes(query, filters) {
    const keywordMatches = recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(query.toLowerCase()) ||
        recipe.ingredients.some(ingredient =>
            ingredient.toLowerCase().includes(query.toLowerCase())
        )
    );

    const filteredResults = keywordMatches.filter(recipe => {
        return filters.every(filter => recipe[filter.type] === filter.value);
    });

    return filteredResults;
}


## Process, Collaboration, and Timeline

Working solo on this project, I followed an agile methodology to manage the development process efficiently. The project was divided into several sprints:

Sprint 1: Initial setup and basic functionality (2 weeks)
Sprint 2: Advanced features and algorithm optimization (3 weeks)
Sprint 3: UI/UX improvements and final touches (2 weeks)
Challenges Overcome
One of the biggest challenges I faced was optimizing the search algorithm to handle large datasets efficiently. Initially, the search was slow and unresponsive. After researching and experimenting with different approaches, I implemented a combination of indexing and caching techniques to improve performance significantly.

Another challenge was ensuring the application was responsive and user-friendly across different devices. This involved extensive testing and tweaking of the CSS and JavaScript to achieve a consistent experience.

## Learnings
This project has been an incredible learning experience. I gained a deeper understanding of web development technologies and improved my problem-solving skills. I also learned the importance of user feedback in shaping the final product. Moving forward, I plan to implement more advanced features like user authentication, personalized recommendations based on user history, and integration with external recipe APIs.

## Installation

To run the project locally, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/recipe-finder.git
    ```
2. Navigate to the project directory:
    ```sh
    cd recipe-finder
    ```
3. Install the necessary dependencies:
    ```sh
    npm install
    ```
4. Start the development server:
    ```sh
    npm start
    ```

## Usage

1. Open your web browser and go to `http://localhost:3000`.
2. Use the search bar to find recipes by ingredient, cuisine, or dietary preference.
3. Click on a recipe to view detailed instructions, ingredients, and nutritional information.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
    ```sh
    git checkout -b feature/your-feature-name
    ```
3. Commit your changes:
    ```sh
    git commit -m 'Add some feature'
    ```
4. Push to the branch:
    ```sh
    git push origin feature/your-feature-name
    ```
5. Open a pull request.

## Related Projects

- [Yummly](https://www.yummly.com/)
- [AllRecipes](https://www.allrecipes.com/)
- [Epicurious](https://www.epicurious.com/)

## Licensing

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

