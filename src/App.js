import React, { createContext, useState } from 'react';
import HomeRoute from './components/HomeRoute/HomeRoute';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
export const UserContext = createContext();
export const CategoryContext = createContext();

const App = () => {
    const [loggedInUser, setLoggedInUser] = useState([]);
    const [category, setCategory] = useState([]);

    return (
        <UserContext.Provider value={[loggedInUser, setLoggedInUser]} className="all">
            <CategoryContext.Provider value={[category, setCategory]}>
                <HomeRoute></HomeRoute>
            </CategoryContext.Provider>
        </UserContext.Provider>
    );
};

export default App;