// App.tsx
import './App.css'
import Calculator from './app/Calculator'
import Background from './components/Background'

function App() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background stays fixed and persistent */}
      <Background />

      {/* Foreground (calculator UI) */}
      <div className="relative z-10 flex justify-center items-center h-full">
        <Calculator />
      </div>
      <footer className="absolute bottom-4 left-0 right-0 z-30 flex justify-center pointer-events-none">
        <div className="pointer-events-auto text-sm text-white/50 bg-black/40 px-3 py-1 rounded-md backdrop-blur-sm">
          Made with ❤️ by Parikshit Yadav
        </div>
      </footer>
    </div>
  )
}

export default App
