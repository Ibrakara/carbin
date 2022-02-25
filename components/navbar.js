import Link from "next/link";
import { useContext } from 'react'
import { LanguageContext } from '../contexts/languageContext'
import styles from './navbar.module.css'

const Navbar = () => {
  const {language, selectedLanguage, setSelectedLanguage} = useContext(LanguageContext);
  return ( 
    <nav className={styles.container}>
      <ul className={styles.listContainer}>
        <li className="nav-link">
          <Link href='/'>
            {language.navbar.home}
          </Link>
        </li>
        <li className="nav-link">
          <Link href='/about'>
            {language.navbar.about}
          </Link>
        </li>
        <li className="nav-link">
          <Link href='/product'>
          {language.navbar.product}
          </Link>
        </li>
        <li className="nav-link">
          <Link href='/news'>
          {language.navbar.news}
          </Link>
        </li>
        <li className="nav-link">
          <Link href='/career'>
          {language.navbar.career}
          </Link>
        </li>
        <li className="nav-link">
          <Link href='/contact'>
          {language.navbar.contact}
          </Link>
        </li>
      </ul>
      <ul className={styles.listContainer}>
        <li>
          <button value={'en'} onClick={(event) => setSelectedLanguage(event.target.value)}>English</button>
        </li>
        <li>
          <button value={'tr'} onClick={(event) => setSelectedLanguage(event.target.value)}>Türkçe</button>
        </li>
      </ul>
    </nav>
   );
}
 
export default Navbar;