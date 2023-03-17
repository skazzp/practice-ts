import {
  Action,
  combineReducers,
  configureStore,
  ThunkAction,
  ThunkDispatch,
} from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { TypedUseSelectorHook, useDispatch } from 'react-redux';
import { contactsReducer } from './contacts/contactsSlice';
import filterReducer from './filter/filterSlice';
import { authReducer } from './auth/authSlice';
import { useSelector } from 'react-redux';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const rootReducer = combineReducers({
  //   auth: persistReducer(authPersistConfig, authReducer),
  auth: authReducer,
  contacts: contactsReducer,
  filter: filterReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export type AppThunk<RT = void> = ThunkAction<Promise<RT>, RootState, unknown, Action>;
export type AppThunkDispatch = ThunkDispatch<RootState, void, Action>;
export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
