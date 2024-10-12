import styles from './page.module.css';
import Link from 'next/link';

type GameMode = {
  label: string;
  href: string;
};

const gameModes: GameMode[] = [
  { label: 'Watch Mode', href: '/ai-players' },
  { label: 'Single Player', href: '/single-player' },
  { label: 'Two Player', href: '/two-player' },
  { label: 'Online Multiplayer', href: '/online-multiplayer' },
];

type GameModeLinkProps = {
  href: string;
  label: string;
};

const GameModeLink: React.FC<GameModeLinkProps> = ({ href, label }) => (
  <li className={styles.gameMode}>
    <Link href={href} className={styles.link}>
      {label}
    </Link>
  </li>
);

const Home: React.FC = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>The Royal Game of Ur</h1>
      <p className={styles.description}>Welcome to the ancient board game of Ur, reimagined for the digital age.</p>
      <p className={styles.description}>Choose your game mode:</p>
      <ul className={styles.gameModes}>
        {gameModes.map((mode) => (
          <GameModeLink key={mode.href} href={mode.href} label={mode.label} />
        ))}
      </ul>
      <p className={styles.description}>
        <Link href="/about" className={styles.link}>
          Learn the rules and history of the game in our About section.
        </Link>
      </p>
    </main>
  );
};

export default Home;