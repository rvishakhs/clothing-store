// Step number 1
import { createSlice } from "@reduxjs/toolkit"; 

// Step number 2
// This is where we setuping initial state of redux "it's just like UseSatate"
const initialState = {
    isCartOpen : false,
    cart : [],
    items : [],  
}

// step 3
export const slice = createSlice({
    name : "cart",              // Just creating a name 
    initialState,               //passing the initial state
   
   // Reducers are the main area we add functions to change our initial state 
    reducers :{

        setitems : (state , action)=> {
            state.items = action.payload;
        },
        
        addtocart : (state, action)=>{
            state.cart = [...state.cart, action.payload.item]
        },
        
        removefromcart : (state, action)=>{
            state.cart = state.cart.filter((item)=> item.id !== action.payload.id)
        },
        
        increaseCount : (state, action)=>{
            state.cart = state.cart.map((item) => {
                if(item.id === action.payload.id) {
                    item.count++
                }

                return item
            })   
        },

        decreaseCount : (state, action)=>{
            state.cart = state.cart.map((item) => {
                if(item.id === action.payload.id) {
                    item.count--
                }

                return item
            })   
        },

        setiscartopen : (state) => {
            state.isCartOpen = !state.isCartOpen ;
        }
        
    }
})



// step 4
// exporting the written actions to get global scope
export const {setitems, addtocart,setiscartopen, removefromcart, increaseCount, decreaseCount} = slice.actions


// Selectors
export const selectBasketItems = (state) => state.cart.cart;
export const selectAllItems = (state) => state.cart.items;
export const iscartopen = (state) => state.cart.isCartOpen;

//Final step
export default slice.reducer;


// Step 5 need to setup redux confix and wrap the redux in main index file 