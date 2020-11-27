import { AppProps } from 'next/app'
import 'sanitize.css'
import 'styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />
}

export default MyApp
