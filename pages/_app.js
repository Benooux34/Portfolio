import { AnimatePresence } from 'framer-motion'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const imageDetails = {
    width: 400,
    height: 600,
  };

  const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

  return (
    <AnimatePresence exitBeforeEnter>
      <Component imageDetails={imageDetails} transition={transition} {...pageProps} />
    </AnimatePresence>
  )
}

export default MyApp
