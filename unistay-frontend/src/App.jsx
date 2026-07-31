import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Auth/Login';
import MainLayout from './components/Layout/MainLayout';
import RoommateFeed from './components/Dashboards/RoommateFeed';
import HousingFeed from './components/Dashboards/HousingFeed'; // <-- Import added

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="/roommates" replace />} />
          
          <Route path="roommates" element={<RoommateFeed />} />
          {/* Replaced the h1 with the actual component */}
          <Route path="housing" element={<HousingFeed />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;