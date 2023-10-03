import { useState } from 'react';

// const { result } = renderHook(() => useVisualMode(FIRST));

// expect(result.current.mode).toBe(FIRST);

export default function useVisualMode(initial) {
  const [history, setHistory] = useState([initial]); 
  const [mode, setMode] = useState(initial);
  const transition = (newMode, replace = false) => {
    setMode(newMode);
    setHistory(prevHistory => {
      const updatedHistory = replace ? [...prevHistory.slice(0, -1), newMode] : [...prevHistory, newMode];
      return updatedHistory;
    });
  };

  const back = () => {
    if (history.length > 1) {
      setHistory(prevHistory => [...prevHistory.slice(0, -1)]);
      setMode(history[history.length - 2]);
    }
  };

  return { mode, transition, back };
}



// our useVisualMode Hook can:

// take in an initial mode
// set the mode state with the initial mode provided
// return an object with a mode property