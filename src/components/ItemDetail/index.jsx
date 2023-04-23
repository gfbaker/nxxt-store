import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Navigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container } from "@mui/system";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import { collection, getDocs } from "firebase/firestore";
import db from "../../../db/firebase-config";
import { useCartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";


export default function ItemDetail() {
	const itemsRef = collection(db, "nfts");

	const [item, setItem] = useState({});
	const [loading, setLoading] = useState(true);
	const [count, setCount] = useState(1);

	const { addProduct } = useCartContext();
	const { id } = useParams();


	const getItemById = async () => {
		try {
			const itemsCollection = await getDocs(itemsRef);
			const itemsArray = itemsCollection.docs.map((doc) => ({
				...doc.data(),
				id: doc.id,
			}));
			setItem(itemsArray.find((item) => item.id === id));
			setLoading(false);
		} catch (e) {
			setItem(null);
		}
	};

	useEffect(() => {
		getItemById();
	}, []);

	const sumar = () => {
		setCount(count + 1);
	  };
	
	  const restar = () => {
		setCount(count - 1);
	  };

	const handleAdd = () => {
		addProduct(item, count);
	};

	if (loading) {
		return (
			<Box sx={{ display: "flex", marginTop: "20%" }}>
				<Skeleton variant="rectangular" width={210} height={118} />
			</Box>
		);
	}
	
	if (!item) {
		return <Navigate to="/404" />;
	}

	return (
		<Container
			sx={{
				marginTop: "110px",
				marginBottom: "30px",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				minHeight: "80vh",
			}}>
			<Card sx={{ maxWidth: 520, backgroundColor: "primary.dark" }}>
				<CardActionArea>
					<CardMedia
						component="img"
						sx={{ height: 500 }}
						image={item.image}
						alt={item.title}
					/>
					{
						<CardContent
							sx={{
								backgroundColor: "#F5F5F5",
								padding: "24px",
								boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
							}}>
							<Typography
								gutterBottom
								variant="h4"
								sx={{
									fontWeight: "bold",
									fontSize: "24px",
									marginBottom: "12px",
									color: "#222222",
									textTransform: "uppercase",
									letterSpacing: "1px",
								}}>
								{" "}
								{item.title}
								{" - "}$
								{item.price}
								{"  "}
								Eth
							</Typography>
							<Typography
								variant="body1"
								sx={{
									fontWeight: "normal",
									color: "#444444",
									lineHeight: "1.5",
								}}>
								{item.description}
							</Typography>
							<Typography
								variant="body1"
								sx={{
									fontWeight: "normal",
									color: "#666666",
									marginTop: "12px",
								}}>
								by {item.author}
							</Typography>
						</CardContent>
					}
				</CardActionArea>
				<Box
					sx={{
						backgroundImage:
							"linear-gradient(to bottom right, #F8A170, #FFCD61)",
						padding: "16px",
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
					}}>
					<Typography
						variant="body2"
						sx={{
							fontWeight: "bold",
							fontSize: "24px",
							color: "#222222",
						}}>
						Quantity:
					</Typography>
					<Button onClick={restar}disabled={count <= 1}>-</Button>
					<Typography variant="body2" sx={{ fontWeight: "bold", fontSize: "24px", color: "#222222" }}>
						{count}
					</Typography>
					<Button onClick={sumar}>+</Button>
					<Link to="/cart">
					<Button onClick={handleAdd}
							size="medium" color="primary" sx={{ backgroundColor: "#222222", color: "#ffffff", borderRadius: "4px", padding: "8px 12px",
							fontWeight: "bold", fontSize: "16px", textTransform: "uppercase", transition: "all 0.3s ease-in-out",
							"&:hover": {
								backgroundColor: "#f2f2f2", color: "#222222",
							}
						}}>
						Add to cart
					</Button>
					</Link>
				</Box>
			</Card>
		</Container>
	);
}
