import React from 'react';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';


const App = (props) => {

  const {errorCount} = props;
  // eslint-disable-next-line react/prop-types
  return (
    <WelcomeScreen
      errorCount={errorCount}
    />
  );
};


export default App;
