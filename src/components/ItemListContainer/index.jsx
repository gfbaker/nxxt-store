import ItemCard from "../ItemCard/index";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function ItemListContainer() {
	const [items, setItems] = useState([]);
	const { categoryId } = useParams();
  
	const getItems = async () => {
	  const { data } = await axios("https://fakestoreapi.com/products");

	  if (categoryId) {
		const categoryItems = data.filter((item) => item.category === categoryId);
		setItems(categoryItems);
	  } else {
		setItems(data);
	  }
	};
  
	useEffect(() => {
	  getItems();
	}, [categoryId]);
  
	return (
	  <Container sx={{ marginTop: "90px", marginBottom: "30px" }}>
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