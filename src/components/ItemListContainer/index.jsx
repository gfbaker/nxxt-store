import PostItem from "../PostItem/index";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";

export default function ItemListContainer({ nfts }) {
	return (
		<Container sx={{ marginTop: "90px" }}>
			<Grid container spacing={1}>
				{nfts.map((nft) => (
					<Grid item key={nft.id} xs={12} sm={6} md={4}>
						<PostItem nft={nft} />
					</Grid>
				))}
			</Grid>
		</Container>
	);
}
