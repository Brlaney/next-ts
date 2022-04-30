import Link from 'next/link';
import styles from '@/styles/components/Navbar.module.scss';

const links = [
  { id: 1, name: 'Basic Pages', link: '/basics' },
  { id: 2, name: 'Carousel', link: '/carousel' },
  { id: 3, name: 'Bars', link: '/bars' },
  { id: 4, name: 'Fluids', link: '/fluids' },
  { id: 5, name: 'Charts', link: '/charts' },
  { id: 6, name: 'Publications', link: '/publications' },
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

            {/* Iterate over the links array */}
            {links.map(link => (
              <li key={link.id} className={styles.item}>
                <Link href={link.link}>
                  <a className={styles.link}>{link.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  )
};
