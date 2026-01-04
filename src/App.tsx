import React, { useState } from 'react';
import { WeddingProvider } from './contexts/WeddingContext';
// import Navigation from './components/Navigation';
import PublicLanding from './components/PublicLanding';
// import AdminPanel from './components/AdminPanel';

function App() {
  // const [isAdminMode, setIsAdminMode] = useState(false);

  // const toggleMode = () => {
  //   setIsAdminMode(!isAdminMode);
  // };

  return (
    <WeddingProvider>
      <div className="App">
        {<PublicLanding />}
      </div>
    </WeddingProvider>
  );
}

export default App;