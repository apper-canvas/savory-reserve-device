import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import orderService from '@/services/orderService';
import { toast } from 'react-toastify';

// Async thunk for adding item to cart
export const addItemAsync = createAsyncThunk(
  'cart/addItemAsync',
  async (dish, { rejectWithValue }) => {
    try {
      const result = await orderService.addToCart(dish);
      toast.success(`${dish.name} added to cart!`);
      return result;
    } catch (error) {
      toast.error('Failed to add item to cart');
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk for updating quantity
export const updateQuantityAsync = createAsyncThunk(
  'cart/updateQuantityAsync',
  async ({ dishId, quantity }, { rejectWithValue }) => {
    try {
      const result = await orderService.updateQuantity(dishId, quantity);
      return result;
    } catch (error) {
      toast.error('Failed to update quantity');
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk for removing item
export const removeItemAsync = createAsyncThunk(
  'cart/removeItemAsync',
  async (dishId, { rejectWithValue }) => {
    try {
      const result = await orderService.removeFromCart(dishId);
      toast.success('Item removed from cart');
      return result;
    } catch (error) {
      toast.error('Failed to remove item');
      return rejectWithValue(error.message);
    }
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalItems: 0,
    totalPrice: 0,
    loading: false,
    error: null,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    addItem: (state, action) => {
      const dish = action.payload;
      const existingItem = state.items.find(item => item.Id === dish.Id);
      
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...dish,
          quantity: 1,
        });
      }
      
      state.totalItems = state.items.reduce((total, item) => total + item.quantity, 0);
      state.totalPrice = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    },
    removeItem: (state, action) => {
      const dishId = action.payload;
      state.items = state.items.filter(item => item.Id !== dishId);
      state.totalItems = state.items.reduce((total, item) => total + item.quantity, 0);
      state.totalPrice = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    },
    updateQuantity: (state, action) => {
      const { dishId, quantity } = action.payload;
      const item = state.items.find(item => item.Id === dishId);
      
      if (item) {
        if (quantity <= 0) {
          state.items = state.items.filter(item => item.Id !== dishId);
        } else {
          item.quantity = quantity;
        }
        
        state.totalItems = state.items.reduce((total, item) => total + item.quantity, 0);
        state.totalPrice = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalItems = 0;
      state.totalPrice = 0;
},
  },
  extraReducers: (builder) => {
    builder
      // Add item async cases
      .addCase(addItemAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addItemAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.items;
        state.totalItems = action.payload.totalItems;
        state.totalPrice = action.payload.totalPrice;
      })
      .addCase(addItemAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Update quantity async cases
      .addCase(updateQuantityAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateQuantityAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.items;
        state.totalItems = action.payload.totalItems;
        state.totalPrice = action.payload.totalPrice;
      })
      .addCase(updateQuantityAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Remove item async cases
      .addCase(removeItemAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeItemAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.items;
        state.totalItems = action.payload.totalItems;
        state.totalPrice = action.payload.totalPrice;
      })
      .addCase(removeItemAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setLoading, addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;