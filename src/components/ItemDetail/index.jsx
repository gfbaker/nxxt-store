import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, LinearProgress } from "@mui/material";
import { Navigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "@mui/system";
import Box from "@mui/material/Box";


export default function ItemDetail() {
	const [item, setItem] = useState({});
	const [loading, setLoading] = useState(true);
	const { id } = useParams();

	const getItemById = async () => {
		try {
			const { data } = await axios(`https://fakestoreapi.com/products/${id}`);
			setItem(data);
			setLoading(false);
		} catch (e) {
			setItem(null);
		}
	};

	useEffect(() => {
		getItemById();
	}, []);

	if (loading) {
		return (
			<Box sx={{ display: "flex" }}>
				<LinearProgress />
			</Box>
		);
	}
	if (!item) {
		return <Navigate to="/404" />;
	}

	return (
		<Container
			sx={{
				marginTop: "90px",
				marginBottom: "30px",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				minHeight: "80vh",
			}}>
			<Card
				sx={{
					width: 345,
					height: "100%",
					backgroundColor: "primary.dark",
					"&:hover": {
						backgroundColor: "primary.main",
						opacity: [0.9, 0.8, 0.7],
					},
				}}>
				<CardActionArea>
					<CardMedia
						component="img"
						sx={{ height: 300 }}
						image={item.image}
						alt={item.title}
					/>
					{
						<CardContent sx={{ backgroundColor: "#F5F5F5" }}>
							<Typography
								gutterBottom
								variant="h5"
								component="h2">
								{item.title}
							</Typography>
							<Typography
								variant="body2"
								sx={{ backgroundColor: "#F5F5F5" }}>
								{item.description}
							</Typography>
						</CardContent>
					}
				</CardActionArea>
				<CardActions sx={{ backgroundColor: "#c3b9a7" }}>
					<Button
						size="small"
						color="primary">
						Buy
					</Button>
				</CardActions>
			</Card>
		</Container>
	);
}
