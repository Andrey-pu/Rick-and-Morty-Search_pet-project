/* eslint-disable @typescript-eslint/no-unused-expressions */
import { createSlice } from '@reduxjs/toolkit'
import { ICharacter } from '../../models/ICharacter'

interface CharacterState {
	characters: ICharacter[]
	inputSearh: string
	pageNumber: number
	status: string
	
}

const initialState: CharacterState = {
	characters: [],
	inputSearh: '',
	pageNumber: 1,
	status: '',
	
}

export const CharacterSlice = createSlice({
	name: 'character',
	initialState,
	reducers: {
		addToInputSearch(state, action) {
			state.inputSearh = action.payload //It's a very bad idea, i have to change it
		},
		nextPage(state, action) {
			state.pageNumber++ //? ...state
		},
		prevPage(state, action) {
			state.pageNumber-- // and too
		},
		resetPage: state => {
			state.pageNumber = 1 //It's a very bad idea too, i have to change it
		},
		setStatus: (state, action) => {
			state.status = action.payload // and too
		},
		resetStatus: state => {
			state.status = '' //Soso, i have to change it
		},
		
	},
})

export default CharacterSlice.reducer
export const {
	addToInputSearch,
	nextPage,
	prevPage,
	resetPage,
	setStatus,
	resetStatus,
	
} = CharacterSlice.actions
