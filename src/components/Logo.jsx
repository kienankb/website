import styles from './Logo.module.scss';

const Logo = () => {
  const figlet = [
    `      ___           ___                   `,
    `     /__/|         /__/|         _____    `,
    `    |  |:|        |  |:|        /  /::\\   `,
    `    |  |:|        |  |:|       /  /:/\\:\\  `,
    `  __|  |:|      __|  |:|      /  /:/~/::\\ `,
    ` /__/\\_|:|____ /__/\\_|:|____ /__/:/ /:/\\:|`,
    ` \\  \\:\\/:::::/ \\  \\:\\/:::::/ \\  \\:\\/:/~/:/`,
    `  \\  \\::/~~~~   \\  \\::/~~~~   \\  \\::/ /:/ `,
    `   \\  \\:\\        \\  \\:\\        \\  \\:\\/:/  `,
    `    \\  \\:\\        \\  \\:\\        \\  \\::/   `,
    `     \\__\\/         \\__\\/         \\__\\/    `,
  ];

  return (
    <div
      role='img'
      title='KKB'
      aria-label='the text kkb rendered with an ASCII art font'
      className={styles.logo}
    >
      {figlet.map((line, idx) => <div key={idx}>{line}</div>)}
    </div>
  )
}

export default Logo;
