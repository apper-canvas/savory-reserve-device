import mockOrderData from '@/services/mockData/orderData.js';

let orderData = { ...mockOrderData };

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const orderService = {
  addToCart: async (dish) => {
    await delay(300);
    const existingItem = orderData.items.find(item => item.Id === dish.Id);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      orderData.items.push({
        ...dish,
        quantity: 1,
      });
    }
    
    orderData.totalItems = orderData.items.reduce((total, item) => total + item.quantity, 0);
    orderData.totalPrice = orderData.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    
    return { ...orderData };
  },

  removeFromCart: async (dishId) => {
    await delay(200);
    orderData.items = orderData.items.filter(item => item.Id !== dishId);
    orderData.totalItems = orderData.items.reduce((total, item) => total + item.quantity, 0);
    orderData.totalPrice = orderData.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    
    return { ...orderData };
  },

  updateQuantity: async (dishId, quantity) => {
    await delay(200);
    const item = orderData.items.find(item => item.Id === dishId);
    
    if (item) {
      if (quantity <= 0) {
        orderData.items = orderData.items.filter(item => item.Id !== dishId);
      } else {
        item.quantity = quantity;
      }
      
      orderData.totalItems = orderData.items.reduce((total, item) => total + item.quantity, 0);
      orderData.totalPrice = orderData.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }
    
    return { ...orderData };
  },

  getCart: async () => {
    await delay(200);
    return { ...orderData };
  },

  clearCart: async () => {
    await delay(300);
    orderData = {
      items: [],
      totalItems: 0,
      totalPrice: 0,
    };
    
    return { ...orderData };
  }
};

export default orderService;