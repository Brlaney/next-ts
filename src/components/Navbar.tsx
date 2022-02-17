import Link from 'next/link';
import styles from '@/styles/components/Navbar.module.scss';


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
            Next.tsx
          </a>
        </div>

        {/* Navbar links - right-end of navbar */}
        <div id={styles.rightside} className='uk-navbar-right uk-margin-right'>
          <ul id={styles.list} className='uk-navbar-nav'>

            {/* Link 1 */}
            <li className={styles.active}>
              <Link href='/products'>
                <a className={styles.link}>Products</a>
              </Link>
            </li>

            {/* Link 2 */}
            <li className={styles.notactive}>
              <Link href='/sign-up'>
                <a className={styles.link}>Sign-up</a>
              </Link>
            </li>

            {/* Link 3 */}
            <li className={styles.notactive}>
              <Link href='/contact'>
                <a className={styles.link}>Contact</a>
              </Link>
            </li>

            {/* Link 4 */}
            <li className={styles.notactive}>
              <Link href='/about'>
                <a className={styles.link}>About</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
};
