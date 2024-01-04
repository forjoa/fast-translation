import logo from '/traduccion.png'
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react'

const Header = () => {
  return (
    <header>
      <div className='left-part'>
        <img src={logo} alt='Logo' />
        <h1>Fast translation</h1>
      </div>

      <div className='right-part'>
        <a href='https://github.com/forjoa/fast-translation' target='_blank'>
          <IconBrandGithub size={35} />
        </a>
        <a href='https://www.linkedin.com/in/joaquin-trujillo-851547254/' target='_blank'>
          <IconBrandLinkedin size={35} />
        </a>
      </div>
    </header>
  )
}

export default Header
