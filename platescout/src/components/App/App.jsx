import { Routes, Route } from 'react-router-dom';
import Navigation from '../Navigation/Navigation.jsx';
import HomePage from '../../pages/HomePage.jsx';
import LoginForm from '../../forms/LoginForm.jsx';
import SignupForm from '../../forms/SignupForm.jsx';
import ProtectedRoute from '../../forms/ProtectedRoute.jsx';
import Profile from '../../pages/Profile.jsx';
import PageNotFound from '../../pages/PageNotFound.jsx';
import './App.css';

// let business = {

//     imageSrc: 'https://csciprojects.us/pizza.jpg',
//     name: 'MarginOtto Pizzeria',
//     address: '1010 Paddington Way',
//     city: 'Flavortown',
//     state: 'NY',
//     zipCode: '10101',
//     category: 'Italian',
//     rating: 4.5,
//     reviewCount: 90
// };

// const businesses = [business, business, business, business, business, business];

export default function App() {

  // const searchYelp = (term, location, sortBy) => {
  //   console.log(`Searching Yelp with: Term ${term}, Location ${location}, Sort By ${sortBy}`);
  // };

  return (

      <div className="App">
        <Navigation/>
        <h1>PlateScout</h1>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<LoginForm/>}/>
          <Route path="/signup" element={<SignupForm/>}/>
          <Route element={<ProtectedRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </div>
      
  );
}

