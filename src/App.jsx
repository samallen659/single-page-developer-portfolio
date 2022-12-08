import './App.css';
import { Hero } from './components/Hero/Hero';
import { Skills } from './components/Skills/Skills';

function App() {
	return (
		<div className='bg-primary'>
			<header className='container'>
				<Hero />
			</header>
			<main className='container'>
				<Skills />
			</main>
		</div>
	);
}

export default App;
