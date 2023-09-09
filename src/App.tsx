import { 
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route 
} from "react-router-dom"
import Home from "./pages/Home"
import Currencies from "./pages/Currencies"
import Exchanges from "./pages/Exchanges"
import News from "./pages/News"
import Error404 from "./pages/Error404"
import Layout from "./components/Layout"
import Details from "./pages/Details"

const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout />}>
    <Route index path="/" element={<Home />}/>
    <Route path="currencies" element={<Currencies />}/>
    <Route path="currencies/:id" element={<Details />}/>
    <Route path="exchanges" element={<Exchanges />}/>
    <Route path="news" element={<News />}/>
    <Route path="*" element={<Error404 />}/>
  </Route>
))
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
