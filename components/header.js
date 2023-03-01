import Link from 'next/link'

const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/"> Home
          </Link>
        </li>
        <li>
          <Link href="/services">Services
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header;
