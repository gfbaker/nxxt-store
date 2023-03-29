import ItemCard from "../ItemCard/index";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";

export default function ItemListContainer({ items }) {
	console.log(items);
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
