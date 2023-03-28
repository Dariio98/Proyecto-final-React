import React from "react";
import Header from "./components/header/Header"
import Cart from "./components/header/Cart"
import ItemListContainer from "./components/main/ItemListContainer";
import ItemDetailContainer from "./components/main/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CustomProvider } from "./context/CartProductContext";



function App() {
  return (
    <BrowserRouter>
      <CustomProvider>
        <Header />       
        < Routes>
          <Route path='/' element={ <ItemListContainer />}/>
              <Route path='/categoria/:name' element= {<ItemListContainer />}/>
              <Route path='/Cart' element={<Cart />}/>
              <Route path='/product/:id' element={<ItemDetailContainer />} />
        </Routes>
      </CustomProvider>

    </BrowserRouter>
  );
}

export default App;

