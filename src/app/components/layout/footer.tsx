import Link from 'next/link'
import Logo from '../Logo'

const Footer = () => {
  return (
    <div>
      <Link href="/">
        <Logo />
      </Link>
    </div>
  )
}

export default Footer
