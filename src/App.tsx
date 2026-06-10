import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Hero from './Components/Hero';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Header from './Components/Header';

const darkTheme = {
  background: '#0d1117',
  text: '#ffffff',
  accent: '#1E90FF',
  navBg: '#0d1117',
  mutedText: '#6e7681',
};

const lightTheme = {
  background: '#f0f0f0',
  text: '#0d1117',
  accent: '#1E90FF',
  navBg: '#f0f0f0',
  mutedText: '#444444',
};

function App() {
  const [isDark, setIsDark] = useState(true);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Header onToggle={() => setIsDark(!isDark)} isDark={isDark} />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}

export default App;