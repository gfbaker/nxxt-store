import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

export default function Item({ item }) {
	return (
		<Grid>
			<Card
				sx={{ "&:hover": { opacity: [0.9, 0.8, 0.7],}}}>
				<Link to={`${item.id}`}>
					<CardActionArea>
						<CardMedia component="img" sx={{ height: 500, objectFit: "cover"}} image={item.image} alt={item.title} />
					</CardActionArea>
				</Link>
				<CardActions sx={{ backgroundColor: "#c3b9a7" }}>
					<Button size="small" color="primary">
						Buy
					</Button>
				</CardActions>
			</Card>
		</Grid>
	);
}
