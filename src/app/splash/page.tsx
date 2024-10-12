import styles from '../page.module.css';

const Splash: React.FC = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Welcome to The Royal Game of Ur</h1>
      <p className={styles.description}>Get ready to experience the ancient game like never before!</p>
      <p className={styles.description}>Choose a mode to begin:</p>
      <button className={styles.button}>Start Game</button>
    </main>
  );
};

export default Splash;



