import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
 return (
   <main className={styles.main}>
     <h1 className={styles.title}>The Royal Game of Ur</h1>
     <p className={styles.description}>Welcome to the ancient board game of Ur, reimagined for the digital age.</p>
     <p className={styles.description}>Choose your game mode:</p>
     <ul className={styles.gameModes}>
       <li className={styles.gameMode}>
         <Link href="/single-player" className={styles.link}>
           Single Player
         </Link>
       </li>
       <li className={styles.gameMode}>
         <Link href="/two-player" className={styles.link}>
           Two Player
         </Link>
       </li>
       <li className={styles.gameMode}>
         <Link href="/online-multiplayer" className={styles.link}>
           Online Multiplayer
         </Link>
       </li>
     </ul>
     <p className={styles.description}>
       <Link href="/about" className={styles.link}>
         Learn the rules and history of the game in our About section.
       </Link>
     </p>
   </main>
 );
}


