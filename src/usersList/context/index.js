import React, { createContext, useReducer, useState } from 'react'
import {usersReducer} from '../reducers';

export const UsersContext = createContext();

export default  UsersProvider=({children})=> {
    const [state,dispatch]=useReducer(usersReducer,{users:[],profile:{}});
  return (
    <UsersContext.Provider value={{state,dispatch}}>
        {children}
    </UsersContext.Provider>
  )
};
