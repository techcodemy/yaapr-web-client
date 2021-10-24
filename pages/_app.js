import ThemeProvider, { useTheme } from '../providers/ThemeProvider'
import '../styles/globals.css'
import '../styles/nprogress.css'

function MyApp({ Component, pageProps }) {

  return (
    <ThemeProvider activeTheme='light'>
      <Component {...pageProps} />
    </ThemeProvider>
   
  )
}

export default MyApp
