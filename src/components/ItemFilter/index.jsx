import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import ItemCard from "../ItemCard";
import { Grid, LinearProgress } from "@mui/material";
import { Container, Box } from "@mui/material";

function ItemFilter() {
	const [itemCategory, setItemCategory] = useState({});
	const [loading, setLoading] = useState(true);
	const { category } = useParams();

	const getCategory = async () => {
		try {
			const { data } = await axios(`https://fakestoreapi.com/products`);
			setItemCategory(data);
			setLoading(false);
		} catch (e) {
			setItemCategory(null);
		}
	};

	useEffect(() => {
		getCategory();
	}, []);

	if (loading) {
		return (
			<Box sx={{ display: "flex" }}>
				<LinearProgress />
			</Box>
		);
	}
	if (!itemCategory) {
		return <Navigate to="/404" />;
	}

	return (
		<>
			<Container sx={{ marginTop: "90px", marginBottom: "30px" }}>
				<Grid container spacing={1}>
					{itemCategory.map((item) =>
						item.category === category ? (
							<Grid item key={item.id} xs={12} sm={6} md={4}>
								<ItemCard item={item} />
							</Grid>
						) : null
					)}
				</Grid>
			</Container>
		</>
	);
}
export default ItemFilter;
