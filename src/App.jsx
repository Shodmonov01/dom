import { Header } from './components/Header/Header';
import './app.scss';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import { Footer } from './components/Footer/Footer';
import Catalog from './pages/Catalog/Catalog';

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/catalog' element={<Catalog />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
