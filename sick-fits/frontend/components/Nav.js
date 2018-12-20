import Link from 'next/link';
import NavStyles from './styles/NavStyles';

const Nav = () => (
  <NavStyles>
    <Link href="/items">
      <a>Shop</a>
    </Link>
    <Link href="/sell">
      <a></a>
    </Link>
    <Link href="/signup">
      <a></a>
    </Link>
    <Link href="/orders">
      <a></a>
    </Link>
    <Link href="/me">
      <a></a>
    </Link>
  </NavStyles>
)

export default Nav;