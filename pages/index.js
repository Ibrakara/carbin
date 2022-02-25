import { useContext, useEffect } from 'react'
import { LanguageContext } from '../contexts/languageContext'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  const {language, selectedLanguage, setSelectedLanguage} = useContext(LanguageContext)
  useEffect(() => {
    console.log(language.about, [selectedLanguage])
  }, [])
  return (
    <div>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </div>
  )
}
