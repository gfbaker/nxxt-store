import React, { useState } from "react";
import { TableContainer, Paper, Table, TableCell, TableHead, TextField, Button, Stack, Box } from "@mui/material";
import { useCartContext } from "../../../contexts/CartContext";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { Container, TableRow } from "@mui/material";

const CheckOutForm = ({onOrderClick}) => {

	const { ...value  } = useCartContext();
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [emailValidation, setEmailValidation] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");

	    const order = {
			date: new Date(),
			buyer: { firstName, lastName, email, emailValidation, phoneNumber
			},
			items: value.cart.map((item) => ({ id: item.id, title: item.title, description: item.description,
				price: item.price, quantity: item.quantity})),
			total: value.totalPrice,
			};

		const canSubmit = () => {
			return (
			  firstName !== "" &&
			  lastName !== "" &&
			  email !== "" &&
			  email === emailValidation &&
			  phoneNumber !== ""
			);
		  }

		const addForm = async (e) => {
			  try {
				const db = getFirestore();
				const orderCollection = collection(db, "order");
				await addDoc(orderCollection, order)
				.then((docRef) => {
				  onOrderClick(docRef.id);
				  console.log(`Document written with ID: ", ${docRef.id}`);
				});
			  } catch (e) {
				alert("We are sorry, your order could not be processed");
			  }
			}

	return (
		<>
			<TableContainer component={Paper} sx={{ marginTop: 3 }}>
				<Table sx={{ minWidth: 800 }} aria-label="spanning table">
					<TableHead
						sx={{
							backgroundImage:
								"linear-gradient(to bottom right, #F8A170, #FFCD61)",
						}}>
						<TableRow>
						<TableCell align="center" colSpan={7}>Your Information</TableCell>
						</TableRow>
					</TableHead>
				<Container style={{marginTop:"30px" , padding: "10px"}}>
				<form sx={{ padding: "16px" }}>
					<Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
						<TextField
							type="text"
							variant="outlined"
							color="secondary"
							label="First Name"
							onChange={(e) => setFirstName(e.target.value)}
							value={firstName}
							fullWidth
							required
						/>
						<TextField
							type="text"
							variant="outlined"
							color="secondary"
							label="Last Name"
							onChange={(e) => setLastName(e.target.value)}
							value={lastName}
							fullWidth
							required
						/>
					</Stack>
					<TextField
						type="email"
						variant="outlined"
						color="secondary"
						label="Email"
						onChange={(e) => setEmail(e.target.value)}
						value={email}
						fullWidth
						required
						sx={{ mb: 4 }}
					/>
					<TextField
						type="email"
						variant="outlined"
						color="secondary"
						label="Repeat your email"
						onChange={(e) => setEmailValidation(e.target.value)}
						value={emailValidation}
						required
						fullWidth
						sx={{ mb: 4 }}
					/> 
					<TextField
						type="number"
						variant="outlined"
						color="secondary"
						label="Phone Number"
						onChange={(e) => setPhoneNumber(e.target.value)}
						value={phoneNumber}
						required
						fullWidth
						sx={{ mb: 4 }}
					/>
				</form>
				</Container>
				</Table>
			</TableContainer>
			<Box
				sx={{
					backgroundImage: "linear-gradient(to bottom right, #f2f2f2, #c4c4c4)",
					padding: "16px",
					display: "flex",
					justifyContent: "right",
				}}>
				<Button 
				onClick={addForm}
				disabled={!canSubmit()}
				sx={{
					backgroundColor: "#222222",
					color: "#ffffff",
					borderRadius: "4px",
					padding: "14px 18px",
					fontWeight: "bold",
					fontSize: "16px",
					textTransform: "uppercase",
					transition: "all 0.3s ease-in-out",
					"&:hover": { backgroundColor: "#f2f2f2", color: "#222222" },
				}}
				>
				Place Order
				</Button>
			</Box>
		</>
	);
};

export default CheckOutForm;
