const mockMenuData = [
  {
    Id: 1,
    name: 'Appetizers',
    description: 'Start your meal with our carefully crafted appetizers',
    image: 'https://images.unsplash.com/photo-1541014741259-de529411b96a?w=400&h=300&fit=crop',
    dishes: [
      {
        Id: 1,
        name: 'Truffle Arancini',
        description: 'Crispy risotto balls with truffle oil and parmesan',
        price: 18,
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=600&fit=crop',
        largeImage: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=1200&h=800&fit=crop',
        allergens: ['Dairy', 'Eggs'],
        rating: 4.8,
        isVegetarian: true
      },
      {
        Id: 2,
        name: 'Seared Scallops',
        description: 'Pan-seared scallops with cauliflower puree and pancetta',
        price: 24,
        image: 'https://images.unsplash.com/photo-1559847844-d91a0d999ae4?w=800&h=600&fit=crop',
        largeImage: 'https://images.unsplash.com/photo-1559847844-d91a0d999ae4?w=1200&h=800&fit=crop',
        allergens: ['Shellfish'],
        rating: 4.9,
        isVegetarian: false
      },
      {
        Id: 3,
        name: 'Burrata Caprese',
        description: 'Fresh burrata with heirloom tomatoes and basil oil',
        price: 22,
        image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=800&h=600&fit=crop',
        largeImage: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=1200&h=800&fit=crop',
        allergens: ['Dairy'],
        rating: 4.7,
        isVegetarian: true
      }
    ]
  },
  {
    Id: 2,
    name: 'Main Courses',
    description: 'Signature dishes crafted with premium ingredients',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop',
    dishes: [
      {
        Id: 4,
        name: 'Wagyu Beef Tenderloin',
        description: 'Premium wagyu beef with roasted vegetables and red wine jus',
        price: 85,
        image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&h=600&fit=crop',
        largeImage: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=1200&h=800&fit=crop',
        allergens: ['Sulphites'],
        rating: 4.9,
        isVegetarian: false
      },
      {
        Id: 5,
        name: 'Atlantic Salmon',
        description: 'Cedar plank salmon with quinoa and lemon herb sauce',
        price: 42,
        image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&h=600&fit=crop',
        largeImage: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=1200&h=800&fit=crop',
        allergens: ['Fish'],
        rating: 4.6,
        isVegetarian: false
      },
      {
        Id: 6,
        name: 'Mushroom Risotto',
        description: 'Creamy arborio rice with wild mushrooms and truffle oil',
        price: 32,
        image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=800&h=600&fit=crop',
        largeImage: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=1200&h=800&fit=crop',
        allergens: ['Dairy'],
        rating: 4.5,
        isVegetarian: true
      }
    ]
  },
  {
    Id: 3,
    name: 'Desserts',
    description: 'Sweet endings to your perfect meal',
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop',
    dishes: [
      {
        Id: 7,
        name: 'Chocolate Lava Cake',
        description: 'Warm chocolate cake with molten center and vanilla ice cream',
        price: 16,
        image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&h=600&fit=crop',
        largeImage: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=1200&h=800&fit=crop',
        allergens: ['Dairy', 'Eggs', 'Gluten'],
        rating: 4.8,
        isVegetarian: true
      },
      {
        Id: 8,
        name: 'Tiramisu',
        description: 'Classic Italian dessert with coffee-soaked ladyfingers',
        price: 14,
        image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&h=600&fit=crop',
        largeImage: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=1200&h=800&fit=crop',
        allergens: ['Dairy', 'Eggs', 'Gluten'],
        rating: 4.7,
        isVegetarian: true
      },
      {
        Id: 9,
        name: 'Crème Brûlée',
        description: 'Vanilla custard with caramelized sugar crust',
        price: 12,
        image: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=800&h=600&fit=crop',
        largeImage: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=1200&h=800&fit=crop',
        allergens: ['Dairy', 'Eggs'],
        rating: 4.6,
        isVegetarian: true
      }
    ]
  }
];

export default mockMenuData;