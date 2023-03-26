import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "./components/Footer";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";

function App() {
	const [nfts, setNFTs] = useState([]);

	const getNFTs = async () => {
		const { data } = await axios("https://fakestoreapi.com/products");
		setNFTs(data);
	};

	useEffect(() => {
		getNFTs();
	}, []);

	console.log(nfts);
	return (
		<>
			<NavBar />
			<Routes>
				<Route path="/" element={<Navigate to="/home" />} />
				<Route path="/home" element={<Home />} />	
				<Route path="/collections" element={<ItemListContainer nfts={nfts} />} />
			</Routes>
			<Footer />
		</>
	);
}
export default App;
