import { AppState, AppThunk } from './store';
import { createSlice, PayloadAction, Selector } from '@reduxjs/toolkit';
import { Cart, getEmptyCart, LineItem, setCart } from 'lib/cart';
import { Entity } from 'lib/utils';

const cartSlice = createSlice({
  name: 'cart',
  initialState: getEmptyCart(),
  reducers: {
    cartChanged: (state, action: PayloadAction<Cart>) => action.payload,
    lineItemChanged: (state, action: PayloadAction<Entity<LineItem>>) => {
      const [itemId, item] = action.payload;
      if (item.quantity <= 0) delete state.items[itemId];
      else state.items[itemId] = item;
    },
  },
});

function lineItemChanged(id: string, item: LineItem): AppThunk {
  return (dispatch, getState) => {
    dispatch(cartSlice.actions.lineItemChanged([id, item]));
    setCart(getState().cart);
  };
}

function selectCart(state: AppState): Cart {
  return state.cart;
}

function selectLineItem(id: string): Selector<AppState, LineItem> {
  return (state: AppState) => state.cart.items[id];
}

export default cartSlice.reducer;
export const { cartChanged } = cartSlice.actions;
export { lineItemChanged };
export { selectCart, selectLineItem };