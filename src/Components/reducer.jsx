export const initialState={
    cart:[],
    user:null
};

export const getcartTotal = (cart)=> cart?.reduce((amount,item)=> item.price + amount,0);
const reducer = (state,action) => {
    switch(action.type){
        case 'ADD_TO_CART':
            return {
                ...state,
                cart:[...state.cart,action.item]
            };
   case "REMOVE_FROM_CART":
    const index = state.cart.findIndex(
        (cartItem) => cartItem.title === action.title
    );
    let newcart = [...state.cart];
     if(index>=0){
     newcart.splice(index,1)
     } else{
        console.warn('Can not remove product(title:${action.title}) as its not in basket')
     }
   return {
    ...state,cart : newcart
   }
  case 'SET_USER':
    return{
        ...state,user:action.user
    }
            default:
                return state;
    }
}
export default reducer;