import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Favorites from './pages/Favorites';
import VendorSignup from './pages/VendorSignup';
import Stores from './pages/Stores';
import Products from './pages/Products';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [favorites, setFavorites] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const addToCart = (product: any) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const toggleFavorite = (product: any) => {
    setFavorites(prev => {
      const isFavorite = prev.some(item => item.id === product.id);
      if (isFavorite) {
        return prev.filter(item => item.id !== product.id);
      }
      return [...prev, product];
    });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home 
          onNavigate={setCurrentPage} 
          addToCart={addToCart} 
          toggleFavorite={toggleFavorite}
          favorites={favorites}
          searchQuery={searchQuery}
        />;
      case 'about':
        return <About />;
      case 'login':
        return <Login onNavigate={setCurrentPage} />;
      case 'cart':
        return <Cart items={cartItems} setItems={setCartItems} />;
      case 'favorites':
        return <Favorites items={favorites} addToCart={addToCart} />;
      case 'vendor-signup':
        return <VendorSignup onNavigate={setCurrentPage} />;
      case 'stores':
        return <Stores onNavigate={setCurrentPage} />;
      case 'products':
        return <Products 
          addToCart={addToCart} 
          toggleFavorite={toggleFavorite}
          favorites={favorites}
          searchQuery={searchQuery}
        />;
      default:
        return <Home 
          onNavigate={setCurrentPage} 
          addToCart={addToCart} 
          toggleFavorite={toggleFavorite}
          favorites={favorites}
          searchQuery={searchQuery}
        />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar 
        onNavigate={setCurrentPage} 
        cartItemCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        favoriteCount={favorites.length}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      {renderPage()}
    </div>
  );
}

export default App;