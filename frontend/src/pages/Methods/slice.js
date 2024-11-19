import { createSlice } from "@reduxjs/toolkit";

const initialState={
    data:null,
    loading:false,
    error:'',
}

const addUserSlice=createSlice({
    name:'addUsers',
    initialState,
    reducers:{
        addUsers(state){
            state.loading=true;
        },
        addUsersSuccess(state,action){
            state.loading=false;
            state.data=action.payload;
            console.log("Added User: ",action.payload)
        },
        addUsersError(state,action){
            state.loading=false;
            state.error=action.payload;
            console.log("Error");
        },
        fetchUsers(state) {
            state.loading = true;
          },
          fetchUsersSuccess(state, action) {
            state.loading = false;
            state.data = action.payload; 
            console.log("Fetched Users: ", action.payload);
          },
          fetchUsersError(state, action) {
            state.loading = false;
            state.error = action.payload;
            console.log("Error fetching users: ", action.payload);
          },
          deleteUsers(state){
            state.loading=true;
          },
          deleteUsersSuccess(state,action){
            console.log(action.payload);
            state.loading=false;
            console.log("Deleted",action.payload);
            state.data=state.data.filter(user=>user._id!==action.payload);
          },
          deleteUsersError(state,action){
            console.log(action.payload);
            state.loading=false;
            state.error=action.payload;
          },
          updateUsers(state){
            state.loading=true;
          },
          updateUsersSuccess(state, action) {
            const updatedIndex = state.data.findIndex((user) => user._id === action.payload._id);
            if (updatedIndex >= 0) {
              state.data[updatedIndex] = action.payload; // Replace the old user data with the updated data
            }
            state.loading = false;
          },
          updateUsersError(state,action){
            state.loading=false;
            state.error=action.payload;
          }
    }
})

export const {actions,reducer}=addUserSlice;
export default reducer;