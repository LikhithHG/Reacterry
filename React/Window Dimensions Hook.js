import {useState, useEffect} from 'react';

const getWindowDimensions = () => {
  //window.innerWidth: Gets the width of the viewport (excluding scrollbars).
  //window.innerHeight: Gets the height of the viewport.
  //Destructuring assigns these values to variables width and height.
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export const useWindowDimensions = () => {
  // Write your hook here
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    //The string 'resize' refers to a built-in browser event that is fired whenever the window is resized.
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowDimensions;
}

const App = () => {
  const { width, height } = useWindowDimensions();

  return (
    <div>
      <h2>Window Dimensions:</h2>
      <p>Width: {width}</p>
      <p>Height: {height}</p>
    </div>
  );
};

export default App;