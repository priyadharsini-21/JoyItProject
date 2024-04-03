import React from 'react'
import { Route, Routes} from 'react-router-dom';
import { Homepage, Store, Basket,AddProductPage } from '../pages';



const Routing = () => {
  return (
        <Routes>
            <Route path="/" exact element={<Homepage/>}/>
            <Route path="/store" exact element={<Store/>} />
            <Route path="/basket" exact element={<Basket/>}/>
            <Route path="/addProduct" exact element={<AddProductPage/>}/>
        </Routes>

  )
}

export default Routing