import Link from "next/link";

const Navbar = () => {
  return ( 
    <nav>
      <ul className="nav-link">
        <Link href='/'>Anasayfa</Link>
      </ul>
      <ul className="nav-link">
        <Link href='/about'>Hakkımızda</Link>
      </ul>
      <ul className="nav-link">
        <Link href='/product'>Ürünler</Link>
      </ul>
      <ul className="nav-link">
        <Link href='/news'>Haberler</Link>
      </ul>
      <ul className="nav-link">
        <Link href='/career'>Kariyer</Link>
      </ul>
      <ul className="nav-link">
        <Link href='/contact'>İletişim</Link>
      </ul>
    </nav>
   );
}
 
export default Navbar;