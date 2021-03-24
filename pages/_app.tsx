import '@/styles/globals.css'
import { wrapper } from '@/store'

function App({ Component , pageProps }: any) {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(App)
