import './App.css';
import { Hero } from './components/Hero/Hero';
import { Skills } from './components/Skills/Skills';
import { Projects } from './components/Projects/Projects';
import { Footer } from './components/Footer/Footer';

function App() {
	return (
		<div className='bg-primary'>
			<header className='container'>
				<Hero />
			</header>
			<main className='container'>
				<Skills />
				<Projects />
			</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
}

export default App;
