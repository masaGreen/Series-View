import { createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

export const getMovies = createAsyncThunk("movies/getMovies", async(id=null, {rejectWithValue})=>{
    try {
        const response = await axios.get("https://imdb-api.com/en/API/MostPopularTVs/k_z87z20xx")
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.message)
    }
})

export const getSingleMovie = createAsyncThunk("movies/getSingleMovie", async(id,{rejectWithValue})=>{
    try {
        const response = await axios.get(`https://imdb-api.com/en/API/MostPopularTVs/k_z87z20xx/${id}`)
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.message)
    }
})
const initialState = {
    movies:[],
    error:null,
    loading:"idle"
}

const moviesSlice = createSlice({
    name:"movies",
    initialState,
    reducers:{},
    
    extraReducers:(builder)=>{
        builder
        .addCase(getMovies.pending, (state)=>{
            return {...state, loading:"loading"}
        })
        .addCase(getMovies.fulfilled, (state, action)=>{
            return {...state, loading:"success", movies:action.payload}
        })
        .addCase(getMovies.rejected, (state, action)=>{
            return {...state, loading:"failed", error:action.payload}
        })
        .addCase(getSingleMovie.pending, (state)=>{
            return {...state, loading:"loading"}
        })
        .addCase(getSingleMovie.fulfilled, (state, action)=>{
            return {...state, loading:"success", movies:action.payload}
        })
        .addCase(getSingleMovie.rejected, (state, action)=>{
            return {...state, loading:"failed", error:action.payload}
        })
        

    }
})
export default moviesSlice.reducer