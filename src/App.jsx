import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import ItemDetail from "./components/ItemDetail";

function App() {
	
	return (
		<>
			<NavBar />
			<Routes>
				<Route path="/" element={<ItemListContainer />} />
				<Route path="/category/:categoryId" element={<ItemListContainer />} />
				<Route path="/item/:id" element={<ItemDetail />} />
				<Route path="/404" element={<div className="div-error"><img src="./cat404.jpeg" alt="404" /></div>} />
			</Routes>
			<Footer />
		</>
	);
}
export default App;
