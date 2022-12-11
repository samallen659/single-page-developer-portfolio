import './App.css';
import { Hero } from './components/Hero/Hero';
import { Skills } from './components/Skills/Skills';
import { Projects } from './components/Projects/Projects';

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
				
			</footer>
		</div>
	);
}

export default App;
