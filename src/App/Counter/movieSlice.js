import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getHeader = createAsyncThunk("header/getHeader", async () => {
  try {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=9cc1bc46ae7070abb9a43667213d613a&page=2"
    );
    console.log(res);
    return res.data.results.slice(0, 1);
  } catch (error) {
    console.log("error");
  }
});

export const getMovies = createAsyncThunk("movie/getMovies", async () => {
  try {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=9cc1bc46ae7070abb9a43667213d613a&page=8"
    );
    console.log(res);
    return res.data.results.slice(0, 15);
  } catch (error) {
    console.log("error");
  }
});

export const getDiscover = createAsyncThunk(
  "discover/getDiscover",
  async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=9cc1bc46ae7070abb9a43667213d613a&page=20`
      );
      console.log(res);
      return res.data.results;
    } catch (error) {
      console.log("error");
    }
  }
);

export const getTV = createAsyncThunk("tv/getTV", async () => {
  try {
    const res = await axios.get(
      "https://api.themoviedb.org/3/discover/tv?api_key=9cc1bc46ae7070abb9a43667213d613a&sort_by=popularity.desc&page=3"
    );
    console.log(res);
    return res.data.results;
  } catch (error) {
    console.log("error");
  }
});

export const getUpComing = createAsyncThunk(
  "upComing/getUpComing",
  async () => {
    try {
      const res = await axios.get(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=9cc1bc46ae7070abb9a43667213d613a&page=2"
      );
      console.log(res);
      return res.data.results;
    } catch (error) {
      console.log("error");
    }
  }
);

export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    header: null,
    movie: null,
    discover: null,
    tv: null,
    upComing: null,
  },
  reducers: {},
  extraReducers: {
    [getHeader.fulfilled]: (state, { payload }) => {
      state.header = payload;
    },
    [getMovies.fulfilled]: (state, { payload }) => {
      state.movie = payload;
    },
    [getDiscover.fulfilled]: (state, { payload }) => {
      state.discover = payload;
    },
    [getTV.fulfilled]: (state, { payload }) => {
      state.tv = payload;
    },
    [getUpComing.fulfilled]: (state, { payload }) => {
      state.upComing = payload;
    },
  },
});

export default moviesSlice.reducer;
