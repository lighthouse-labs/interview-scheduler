import { useState } from 'react';

// const { result } = renderHook(() => useVisualMode(FIRST));

// expect(result.current.mode).toBe(FIRST);

export default function useVisualMode(initial) {
  const [history, setHistory] = useState([initial]); 

  function transition(newMode){
    setHistory(prev => [...prev, newMode])
  }

  function back() {
    setHistory(prev => [...prev.slice(0, prev.length - 1)])
  }

  return { mode: history[history.length -1], transition, back };
}




// our useVisualMode Hook can:

// take in an initial mode
// set the mode state with the initial mode provided
// return an object with a mode property