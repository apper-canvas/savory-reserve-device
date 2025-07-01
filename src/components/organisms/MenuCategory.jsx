import React from "react";
import DishCard from "@/components/molecules/DishCard";

function MenuCategory({ category, onDishImageClick, onAddToOrder }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">{category.name}</h2>
      {category.image && (
        <div className="mb-6 flex justify-center">
          <img
            src={category.image}
            alt={category.name}
            className="w-full max-w-md h-32 object-cover rounded-lg shadow-lg mx-auto"
          />
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.dishes?.map((dish) => (
          <DishCard
            key={dish.Id}
            dish={dish}
            onImageClick={onDishImageClick}
            onAddToOrder={onAddToOrder}
          />
        ))}
      </div>
    </div>
);
}

export default MenuCategory;