import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";

export default function PostItem({ nft }) {
	return (
		<Card sx={{ height: "100%" }}>
			<CardActionArea>
				<CardMedia
					component="img"
					sx={{ height: 300 }}
					image={nft.image}
					alt={nft.title}
				/>
				<CardContent sx={{ backgroundColor: "#F5F5F5" }}>
					<Typography gutterBottom variant="h5" component="h2">
						{nft.title}
					</Typography>
					<Typography variant="body2" sx={{ backgroundColor: "#F5F5F5" }}>
						{nft.description}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button size="small" color="primary">
					Buy
				</Button>
				<Button size="small" color="primary">
					Learn More
				</Button>
			</CardActions>
		</Card>
	);
}
