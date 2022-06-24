import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from './components/pages/login';
import Home from './components/pages/home';
import NewTrade from './components/pages/movimentacao';
import NewUser from './components/pages/new-user';
import { AuthContext } from './context/AuthContext';

const App = () => {

  const {currentUser} = useContext(AuthContext)

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  return (
    <div>
       <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route
              index
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
            <Route path="movimentacao" element={
              <RequireAuth>
                <NewTrade />
              </RequireAuth>
            } />
            <Route path="new-user" element={
                <NewUser />
            } />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
