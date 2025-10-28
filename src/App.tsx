import Header from './components/Header';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Dashboard/>
      <TrustedBy />
      {/* <Features /> */}
    </div>
  );
}

export default App;