import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ItemDetail from "./components/ItemDetail";
import ItemFilter from "./components/ItemFilter";

function App() {
	const [items, setItems] = useState([]);

	const getItems = async () => {
		const { data } = await axios("https://fakestoreapi.com/products");
		setItems(data);
	};

	useEffect(() => {
		getItems();
	}, []);
	
	return (
		<>
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/collection" element={<ItemListContainer items={items} />} />
				<Route path="/collection/:id" element={<ItemDetail />} />
				<Route path="/category/:category" element={<ItemFilter />} />
				<Route path="/category/:category/:id" element={<ItemDetail />} />
				<Route path="/404" element={<div className="div-error"><img src="./cat404.jpeg" alt="404" /></div>} />
			</Routes>
			<Footer />
		</>
	);
}
export default App;
