import {call,put,takeLatest} from 'redux-saga/effects'
import axios from 'axios';
import { actions } from './slice';

function* handleAddUser(action) {
  try {
    const response = yield call(axios.post, "http://localhost:5000/users", action.payload);
    yield put(actions.addUsersSuccess(response.data));
  } catch (error) {
    yield put(actions.addUsersError(error.response?.data?.error || error.message));
    throw error; // Rethrow error to allow frontend to handle it
  }
}

function* handleGetUser() {
    try {
      const response = yield call(axios.get, "http://localhost:5000/users");
      console.log("API Response: ", response.data);
      yield put(actions.fetchUsersSuccess(response.data));
    } catch (err) {
      console.log("Error in fetch API: ", err);
      yield put(actions.fetchUsersError(err.message));
    }
  }

  function* handleDeleteUser(action){
    try{
      console.log(action.payload.id);
      yield call(axios.delete,`http://localhost:5000/users/${action.payload.id}`);
      yield put(actions.deleteUsersSuccess(action.payload.id));
    }
    catch(error){
      console.log("Not deleted"); 
      yield put (actions.deleteUsersError(error.message));
    }
  }

  function* handleUpdateUser(action) {
    try {
      const { id, ...updatedData } = action.payload; // Extract ID and updated data
      const response = yield call(axios.put, `http://localhost:5000/users/${id}`, updatedData);
      yield put(actions.updateUsersSuccess(response.data)); // Use the API response
    } catch (error) {
      yield put(actions.updateUsersError(error.message));
    }
  }


export function* watchAddUser(){
    yield takeLatest(actions.addUsers.type,handleAddUser);
}

export function* watchGetUser() {
    yield takeLatest(actions.fetchUsers.type, handleGetUser);
}

export function* watchDeleteUser(){
  yield takeLatest(actions.deleteUsers.type,handleDeleteUser);
}

export function* watchUpdateUser(){
  yield takeLatest(actions.updateUsers.type,handleUpdateUser);
}