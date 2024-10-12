import styles from '../page.module.css';

const About: React.FC = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>About The Royal Game of Ur</h1>
      <p className={styles.description}>Hi there! This is the story of an ancient game called The Royal Game of Ur.</p>
      <p className={styles.description}>
        A long, long time ago, in a place called Mesopotamia (that&apos;s very far away!), people loved to play games just like we do. One of their favorite games was the Royal Game of Ur. It was played with special dice, tiny pieces, and a board with squares on it.
      </p>
      <p className={styles.description}>
        People would move their pieces along the board and try to be the first to get all of their pieces to the end. It was a little like a race! And just like in a race, sometimes the pieces would bump into each other and have to start all over again.
      </p>
      <p className={styles.description}>
        This game was so much fun that people kept playing it for hundreds and hundreds of years! Now, we can play it on our screens too, just like you can play your favorite games on a tablet or computer.
      </p>
      <p className={styles.description}>Are you ready to learn and play? Let&apos;s go back in time and have some fun!</p>
    </main>
  );
};

export default About;