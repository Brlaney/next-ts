import Link from 'next/link';
import styles from '@/styles/components/Navbar.module.scss';

const endpoints = [
  { id: 1, name: 'Products', link: '/products' },
  { id: 2, name: 'Sign-up', link: '/sign-up' },
  { id: 3, name: 'Contact', link: '/contact' },
  { id: 4, name: 'About', link: '/about' }
];

export default function Navbar() {
  return (
    <div
      id={styles.navbar}
      className='uk-sticky uk-dark'
      uk-sticky='sel-target: .uk-navbar-container;
       cls-active: uk-navbar-sticky;'
    >
      <nav id={styles.navcontainer} className='uk-navbar-container'>
        <div id={styles.parent} className='uk-navbar-left uk-margin-left'>
          <a id={styles.brand} href='/' className='uk-navbar-item uk-logo'>
            Next-ts
          </a>
        </div>

        {/* Navbar links - right-end of navbar */}
        <div id={styles.rightside} className='uk-navbar-right uk-margin-right'>
          <ul id={styles.list} className='uk-navbar-nav'>

            {/* Dropdown list */}
            <li className={styles.liDropdown}>
              <a href='#'>Standard pages</a>
              <div className='uk-navbar-dropdown'>
                <ul className='uk-nav uk-navbar-dropdown-nav'>
                  {endpoints.map(endpoint => {
                    <li key={endpoint.id}>
                      <a href={endpoint.link}>
                        {endpoint.name}
                      </a>
                    </li>
                  })}
                </ul>
              </div>
            </li>

            {/* Carousel link */}
            <li className={styles.liItem}>
              <Link href='/carousel'>
                <a className={styles.link}>Carousel</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
};
