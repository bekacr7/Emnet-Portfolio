import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Contact />

      <footer style={{
        textAlign: 'center',
        padding: '2rem',
        backgroundColor: '#F9F9F7',
        color: '#666',
        fontSize: '0.9rem'
      }}>
        <p>© {new Date().getFullYear()} Emnet Assefa, RDN. All rights reserved.</p>
      </footer>
    </main>
  );
}
