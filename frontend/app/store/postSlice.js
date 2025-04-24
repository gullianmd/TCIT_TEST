import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const getAllPosts = async () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://localhost:3250/posts",
      headers: {},
    };

    const response = await axios.request(config);

    return response.data;
}

export const fetchPosts = createAsyncThunk("post/fetchPosts", getAllPosts);

export const createPost = createAsyncThunk(
  "post/createPost",
  async (newPost) => {
    let data = JSON.stringify(newPost);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:3250/posts",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const response = await axios.request(config);

    return response.data;
  }
);

export const deletePost = createAsyncThunk(
  "post/deletePost",
  async (postId) => {
    let config = {
      method: "delete",
      maxBodyLength: Infinity,
      url: `http://localhost:3250/posts/${postId}`,
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await axios.request(config);

    return response.data;
  }
);

const postSlice = createSlice({
  name: "post",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder;
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(createPost.fulfilled, (state) => {
        state.status = "reload";
        console.log("Post creado!");

      })
      .addCase(deletePost.fulfilled, (state) => {
        state.status = "reload";
        console.log("Post eliminado!");

      });
  },
});

export default postSlice.reducer;
