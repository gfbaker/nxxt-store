import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

export default function Item({ item }) {
	return (
		<Grid
			sx={{
				"&:hover .MuiCardMedia-root": {
					transform: "scale(1.05)",
				},
				"&:hover .MuiCardActions-root": {
					opacity: [0.9, 0.8, 0.7],
				},
			}}>
			<Card sx={{background: "#161515"}}>
				<Link to={`/item/${item.id}`}>
					<CardActionArea>
						<CardMedia
							component="img"
							sx={{ height: 450, objectFit: "cover", padding: 0, transition: "all 0.3s ease-in-out",
							}}
							image={item.image}
							alt={item.title}
						/>
					</CardActionArea>
				</Link>
			</Card>
		</Grid>

	);
}
