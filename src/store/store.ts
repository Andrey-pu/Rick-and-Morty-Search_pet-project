import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import chasracterReducer from './reducers/CharacterSlice'
import { characterAPI } from '../services/CharactersService'


const rootReducer = combineReducers({
	chasracterReducer,
	[characterAPI.reducerPath]: characterAPI.reducer
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware().concat(characterAPI.middleware),
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

