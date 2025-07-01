import React from 'react';
import DishCard from '@/components/molecules/DishCard';

const MenuCategory = ({ category, onDishImageClick }) => {
  return (
    <div className="mb-12">
      {/* Category Header */}
      <div className="text-center mb-8">
        <div className="relative inline-block">
          <img
            src={category.image}
            alt={category.name}
            className="w-full max-w-md h-32 object-cover rounded-lg shadow-lg mx-auto"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-3xl font-bold mb-2">{category.name}</h2>
              <p className="text-sm opacity-90">{category.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Dishes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.dishes.map((dish) => (
          <DishCard
            key={dish.Id}
            dish={dish}
            onImageClick={onDishImageClick}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;