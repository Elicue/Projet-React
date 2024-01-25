import { Provider} from 'react-redux';
import { productsStore } from './store/products-store.js';
import {CartProvider} from './store/shopping-cart-context.js';

import {
  BrowserRouter, Route, Routes
} from 'react-router-dom';

import ProductDetails from './components/ProductDetails.jsx';
import Header from './components/Header.jsx';
import NotFound from './components/NotFound.jsx'
import Shop from './components/Shop.jsx';

// const router = createBrowserRouter([
//   {path: '/', element: <Shop />},
//   {path: '/products/:id', element: <ProductDetails/>},
//   {path: '*', element: <NotFound />}
// ])

function App() {
    return (
      <Provider store={productsStore}>
      <CartProvider>
      <BrowserRouter>
        {/* <RouterProvider router={router}>
        </RouterProvider> */}
           <Header />
            <Routes>
              <Route path='/' element = {<Shop/>}/>
              <Route path='/products/:id' element = {<ProductDetails/>} />
              <Route path='*' element = {<NotFound/>} />
            </Routes>
        </BrowserRouter>
      </CartProvider>
    </Provider>


  );
}

export default App;
