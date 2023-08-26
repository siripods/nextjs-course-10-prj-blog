import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/images/site/max.png" alt="" width={300} height={300} />
      </div>
      <h1>Hi, I'm John Doe</h1>
      <p>I blog about web development</p>
    </section>
  );
}

export default Hero;
