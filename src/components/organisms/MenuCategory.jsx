import React from 'react';
import DishCard from '@/components/molecules/DishCard';

const MenuCategory = ({ category, onDishImageClick, onAddToOrder }) => {
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
<DishCard
              key={dish.Id}
              dish={dish}
              onImageClick={onDishImageClick}
              onAddToOrder={onAddToOrder}
            />
          ))}
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