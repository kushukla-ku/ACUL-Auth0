import './App.css'
import { lazy, Suspense } from 'react';


const ScreenManager = lazy(() => {return import("./ScreenManager")});
function App() {
  return(
    <Suspense fallback={<div>Loading...</div>}>
      <ScreenManager />
    </Suspense>
  )
}

export default App
