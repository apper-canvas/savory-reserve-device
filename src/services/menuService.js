import mockMenuData from '@/services/mockData/menuData.js';

let menuData = [...mockMenuData];

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const menuService = {
  getAllCategories: async () => {
    await delay(300);
    return [...menuData];
  },

  getCategoryById: async (id) => {
    await delay(200);
    const category = menuData.find(cat => cat.Id === parseInt(id));
    return category ? { ...category } : null;
  },

  getDishById: async (categoryId, dishId) => {
    await delay(200);
    const category = menuData.find(cat => cat.Id === parseInt(categoryId));
    if (!category) return null;
    
    const dish = category.dishes.find(dish => dish.Id === parseInt(dishId));
    return dish ? { ...dish } : null;
  },

  searchDishes: async (searchTerm) => {
    await delay(250);
    const allDishes = menuData.flatMap(cat => 
      cat.dishes.map(dish => ({ ...dish, category: cat.name }))
    );
    
    if (!searchTerm) return allDishes;
    
    return allDishes.filter(dish => 
      dish.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dish.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
};

export default menuService;