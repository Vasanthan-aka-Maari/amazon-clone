export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "ADD_ITEM":
      return { ...state, basket: [...state.basket, action.item] };
    case "REMOVE_ITEM":
      let newBasket = [...state.basket];

      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      newBasket.splice(index, 1);
      if (index >= 0) {
      } else {
        console.warn(
          `Can't remove product with id: ${action.id} as it is not in basket`
        );
      }

      return { ...state, basket: newBasket };
    default:
      return state;
  }
}

export default reducer;
