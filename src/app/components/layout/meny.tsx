import Link from 'next/link'
import Logo from '../Logo'

const Menu = () => {
  return (
    <div className="flex h-full items-center justify-between">
      <Link href="/">
        <Logo />
      </Link>
    </div>
  )
}

export default Menu
