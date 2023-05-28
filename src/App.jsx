import  { useEffect } from "react"
import { useSelector,useDispatch } from "react-redux"
import { getProducts } from "./states/features/products/actions"
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import { AboutPage, CategoryPage, ContactPage, HomePage, LoginPage, NotFoundPage, SingupPage } from './pages';
function App() {
  const products = useSelector(state => state.products)
const dispatch = useDispatch()
console.log(products)

useEffect(()=>{
dispatch(getProducts())
},[dispatch])


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<HomePage/>}/>
          <Route path="/about" exact element={<AboutPage/>}/>
          <Route path="/contact" exact element={<ContactPage/>}/>
          <Route path="*" exact element={<NotFoundPage/>}/>
          <Route path="/category" exact element={<CategoryPage/>}/>
          <Route path="/login" exact element={<LoginPage/>}/>
          <Route path="/signup" exact element={<SingupPage/>}/>
        </Routes>
      </Router>
    </div>
    



  )
}
export default App