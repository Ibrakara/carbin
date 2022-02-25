import Layout from '../components/layout'
import { LanguageProvider } from '../contexts/languageContext'
import '../styles/global.css'

export default function App({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LanguageProvider>
  )
}