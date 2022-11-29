import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className='container'>
			<h1 className='text-3xl'>Hello World</h1>
		</div>
	);
}

export default App;
