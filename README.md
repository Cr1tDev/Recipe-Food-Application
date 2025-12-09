# Recipa - Food Recipe Application 🍳

A modern, responsive web application for discovering and exploring delicious recipes from around the world. Built with React and powered by TheMealDB API, Recipa provides an intuitive interface for browsing recipes by category, searching for specific dishes, and viewing detailed recipe instructions.

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?logo=vite)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- **🔍 Recipe Search** - Search for recipes by name with real-time debounced search
- **📂 Category Browsing** - Explore recipes by category (Breakfast, Lunch, Dessert, Side)
- **🎲 Random Recipes** - Discover new recipes with randomly generated suggestions
- **📖 Detailed Recipe View** - View complete recipe details including:
  - Ingredients list with measurements
  - Step-by-step preparation instructions
  - Recipe metadata (cooking time, servings, difficulty)
  - Recipe origin and category information
- **🎨 Modern UI/UX** - Clean, responsive design with smooth animations
- **⚡ Performance Optimized** - Built with React best practices including:
  - Memoization for performance
  - Lazy loading for images
  - Debounced search functionality
  - Optimized API calls

## 🛠️ Technologies Used

- **React 19.2.0** - UI library
- **React Router DOM 7.10.0** - Client-side routing
- **Vite 7.2.4** - Build tool and dev server
- **ESLint** - Code linting
- **TheMealDB API** - Recipe data source

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 16 or higher)
- **npm** or **yarn** package manager

## 🚀 Getting Started

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Recipa-Food-Recipe-Application
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

### Running the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port shown in your terminal).

### Building for Production

```bash
npm run build
```

The production build will be created in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## 📁 Project Structure

```
Recipa-Food-Recipe-Application/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images, icons, and SVG files
│   │   ├── icons/         # Icon images
│   │   ├── image/         # Image assets
│   │   └── svg/           # SVG files
│   ├── components/        # Reusable React components
│   │   ├── common/        # Shared/common components
│   │   └── *.jsx          # Feature components
│   ├── context/           # React Context (if needed)
│   ├── css/               # Stylesheet files
│   ├── hooks/             # Custom React hooks
│   │   ├── useRandomRecipes.js
│   │   └── useSearchRecipes.js
│   ├── layouts/           # Layout components
│   ├── pages/             # Page components
│   │   ├── HomePage.jsx
│   │   ├── RecipesPage.jsx
│   │   ├── CategoryPage.jsx
│   │   ├── RecipeView.jsx
│   │   └── AboutPage.jsx
│   ├── router/            # Router configuration
│   │   └── index.jsx
│   ├── utils/             # Utility functions
│   │   ├── api.js         # API service functions
│   │   ├── constants.js   # Application constants
│   │   └── helpers.js     # Helper functions
│   ├── App.jsx            # Main App component
│   └── main.jsx           # Application entry point
├── package.json
├── vite.config.js
└── README.md
```

## 🔌 API Integration

This application uses **TheMealDB API** (https://www.themealdb.com/api.php) to fetch recipe data. The API is free and doesn't require authentication.

### API Endpoints Used:

- `GET /api/json/v1/1/random.php` - Get random recipe
- `GET /api/json/v1/1/search.php?s={name}` - Search recipes by name
- `GET /api/json/v1/1/filter.php?c={category}` - Filter recipes by category
- `GET /api/json/v1/1/lookup.php?i={id}` - Get recipe details by ID

All API calls are centralized in `src/utils/api.js` for easy maintenance.

## 🎯 Key Features Explained

### Search Functionality
- Real-time search with 300ms debounce to optimize API calls
- Automatic fallback to random recipes when search is cleared
- Error handling for failed API requests

### Category Navigation
- Predefined categories: Breakfast, Lunch, Dessert, Side
- Category mapping to TheMealDB API categories
- Responsive category cards with icons

### Recipe Details
- Complete ingredient list with measurements
- Parsed step-by-step instructions
- Recipe metadata display
- Back navigation with history support

## 🎨 Styling

The application uses:
- **CSS Modules** for component-specific styles
- **Global CSS** for shared styles and theme variables
- **CSS Custom Properties** for theming (green color scheme)
- **Responsive Design** with mobile-first approach

### Theme Colors:
- Primary Green: `#00693d`
- Hover Green: `#009e5c`
- Background: `#f7f8fc`

## 🚦 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🔧 Configuration

### Vite Configuration
The project uses Vite with React plugin. Configuration can be modified in `vite.config.js`.

### ESLint Configuration
ESLint rules are configured in `eslint.config.js` with React-specific rules enabled.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Code Quality

The codebase follows React best practices:
- ✅ Component memoization for performance
- ✅ Custom hooks for reusable logic
- ✅ Centralized API service
- ✅ Proper error handling
- ✅ Accessibility considerations (ARIA labels, semantic HTML)
- ✅ Code organization and separation of concerns

## 🐛 Known Issues

None at the moment. If you find any issues, please open an issue on GitHub.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Ivan Arre**

## 🙏 Acknowledgments

- [TheMealDB](https://www.themealdb.com/) for providing the free recipe API
- React team for the amazing framework
- Vite team for the fast build tool

## 📞 Support

If you have any questions or need help, please open an issue on the GitHub repository.

---

Made with ❤️ using React and Vite
