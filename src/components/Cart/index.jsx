import * as React from "react";
import { useState } from "react";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import CheckOutForm from "./Form";
import CartTable from "./Table";
import Order from "./Order";

export default function Cart() {
	const [isCheckOutClicked, setIsCheckOutClicked] = useState(false);
	const [orderId, setOrderId] = useState("");

	const handleCheckOutClick = () => {
		setIsCheckOutClicked(true);
	};

	const handleOrder = (orderId) => {
		setOrderId(orderId);
	};

	return (
		<>
			<Container
				sx={{ marginTop: "130px", marginBottom: "30px", maxWidth: "100%" }}>
				<Grid container spacing={1}>
					<Grid item xs={12}>
						<div style={{ height: "100%" }}>
							<CartTable onCheckOutClick={handleCheckOutClick} />
							{isCheckOutClicked && 
							<CheckOutForm onOrderClick={handleOrder} />}
							{orderId !== "" ? <Order order={orderId}/> : null}
						</div>
					</Grid>
				</Grid>
			</Container>
		</>
	);
}
