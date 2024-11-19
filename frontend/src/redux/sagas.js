import { all } from "redux-saga/effects";
import { watchAddUser,watchGetUser,watchDeleteUser,watchUpdateUser } from "../pages/Methods/saga";


export default function* productSages(){
    yield all([
        watchAddUser(),
        watchGetUser(),
        watchDeleteUser(),
        watchUpdateUser(),
      ]);
}