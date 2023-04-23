import ItemCard from "../ItemCard/index";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import db from "../../../db/firebase-config";
import Typography from "@mui/material/Typography";

export default function ItemListContainer() {

	const [items, setItems] = useState([]);
	const { categoryId } = useParams();
	const itemsRef = collection(db, "nfts");

	const getItems = async () => {
		const itemsCollection = await getDocs(itemsRef);
		const itemsArray = itemsCollection.docs.map((doc) => ({
			...doc.data(),
			id: doc.id,
		}));
		if (categoryId) {
			const categoryItems = itemsArray.filter(
				(item) => item.category === categoryId
			);
			setItems(categoryItems);
		} else {
			setItems(itemsArray);
		}
	};
	
	useEffect(() => {
		getItems();
	}, [categoryId]);

	return (
		<Container sx={{ marginTop: "140px", marginBottom: "30px" }}>
			<div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
				<Typography variant="h6" noWrap>
					<img src="./nftsSlogan.png" alt="Logo" border="0" width="410px"/>
				</Typography>
			</div>
			<Grid container spacing={1}>
				{items.map((item) => (
					<Grid item key={item.id} xs={12} sm={6} md={4}>
						<ItemCard item={item} />
					</Grid>
				))}
			</Grid>
		</Container>
	);
}
