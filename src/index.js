import "./index.css";
import ReactDOM from "react-dom/client";
import React, { lazy, Suspense } from "react";
import reportWebVitals from "./reportWebVitals";
import NavBar from "./views/Nav";
import store from "./reduxtk/store";
import { Provider } from "react-redux";
import NotFound from "./views/NotFound";
import MovieList from "./views/MovieList";
import MovieDetails from "./views/MovieDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./views/Users";
import Login from "./views/Auth/Login";
import Register from "./views/Auth/Register";
import Actors from "./views/Actors";
import TvShows from "./views/TVShows";

const Home = lazy(() => import("./views/Home"));

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <NavBar />
      <Suspense fallback={<div> Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="actors" element={<Actors />} />
          <Route path="tvShows" element={<TvShows />} />
          <Route path="movielist" element={<MovieList />} />
          <Route path="moviedetails/:id" element={<MovieDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
