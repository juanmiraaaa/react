import { Route, Routes } from "react-router-dom"
import RootLayout from "./components/layout/RootLayout"
import Home from "./pages/Home"
import Menu from "./pages/Menu"
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import ProtectedRoute from "./components/ui/ProtectedRoute"

export default function App() {

  return (
    <Routes>
      <Route>
        <Route element={<RootLayout />}>{/*Renderiza el que toque segun la ruta */}
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={
            <ProtectedRoute>
              <Menu />
            </ProtectedRoute>
          } />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound to="/" replace />} />
        </Route>
      </Route>
    </Routes>
  )
}