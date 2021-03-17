import React, {useEffect} from 'react';
import {AuthProvider} from './src/Authentication/AuthProvider';
import Navigator from './src/controllers/Navigator';

const App = () => {
  useEffect(() => {
    console.disableYellowBox = true;
  });
  return (
    <AuthProvider>
      <Navigator />
    </AuthProvider>
  );
};

export default App;
