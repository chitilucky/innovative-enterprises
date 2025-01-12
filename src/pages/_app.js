import '../styles/globals.css'
import Header from '@/components/Header';
import { CartProvider } from '@/contexts/CartContext';
import Footer from '@/components/Footer'

function MyApp({ Component, pageProps }) {

  return (
    
          <CartProvider>
            <Header/>
              <Component {...pageProps} />
            <Footer/>
        </CartProvider>

  )
}

export default MyApp