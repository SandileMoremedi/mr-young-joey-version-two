import { motion } from "framer-motion";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="home">
      <motion.h1
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -30 }}
        className="name"
      >
        Mr. Young Joey
      </motion.h1>

      <motion.div
        className="links"
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -10000 }}
      >
        <motion.div className="item" whileHover={{ scale: 1.1 }}>
          <h3>About</h3>
          <p>
            I'm a rapper born and bread from South Africa. The journey of how I
            got where I am is on the About page. Don't be shy, hit the next
            page.
          </p>
          <Link to="/about">Learn More</Link>
        </motion.div>
        <motion.div className="item" whileHover={{ scale: 1.1 }}>
          <h3>Contact</h3>
          <p>
            If your planning on adding me on your panel of musicians in and of
            your events feel free to contact me any time.
          </p>
          <Link to="/contact">Contact</Link>
        </motion.div>
        <motion.div className="item" whileHover={{ scale: 1.1 }}>
          <h3>Discography</h3>
          <p>
            If your having trouble finding my music, here is a discography with
            all my list of albums and tracks.
          </p>
          <Link to="/discography">The List</Link>
        </motion.div>
        <motion.div className="item" whileHover={{ scale: 1.1 }}>
          <h3>News</h3>
          <p>
            Need to know when is the next performance at? Need an update of when
            I'm planning on dropping music? Or do you need news on my current
            life. Here is a news update for you.
          </p>

          <Link to="/news">News</Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
