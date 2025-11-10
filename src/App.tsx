import Header from './components/Header';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Dashboard from './components/Dashboard';
import ContentSection from './components/ContentSection';

function App() {
  return (
    <div className="min-h-screen bg-white">
      
      <Header />
      <Hero />
      <Dashboard/>
      <TrustedBy />
      {/* <Features /> */}
      <ContentSection/>
    </div>
  );
}

export default App;