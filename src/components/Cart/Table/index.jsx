import * as React from "react";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Button, Box } from "@mui/material";
import { useCartContext } from "../../../contexts/CartContext";
import { FiTrash2 } from 'react-icons/fi';
import { FaEthereum } from 'react-icons/fa';
import { Link } from "react-router-dom";

export default function CartTable({ onCheckOutClick }) {
	const { ...value  } = useCartContext();
	return (
		<>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 800 }} aria-label="spanning table">
				<TableHead
						sx={{
							backgroundImage:
								"linear-gradient(to bottom right, #F8A170, #FFCD61)",
						}}>
						<TableCell align="center" colSpan={7}>Cart</TableCell>
						<TableRow sx={{backgroundColor: "#f2f2f2"}}>
							<TableCell align="center">IMAGE</TableCell>
							<TableCell align="left">DESCRIPTION</TableCell>
							<TableCell align="center">Qty.</TableCell>
							<TableCell align="center">Price</TableCell>
							<TableCell align="center">Total</TableCell>
							<TableCell align="center">Delete</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{value.cart.map((item) => (
							<TableRow key={item.id}>
								<TableCell align="center"><img width={100} src={item.image}/></TableCell>
								<TableCell width={"300px"}>{item.description}</TableCell>
								<TableCell align="center">{item.quantity}</TableCell>
								<TableCell align="center">${item.price}</TableCell>
								<TableCell align="center">${(item.quantity*item.price).toFixed(2)}</TableCell>
								<TableCell align="center">
									<Button sx={{ backgroundImage: "linear-gradient(to bottom right, #f2f2f2, #e7e7e7)"}} onClick={() => value.remove(item.id)}><FiTrash2/></Button>
								</TableCell>
							</TableRow>
						))}
						<TableRow>
							<TableCell rowSpan={4} />
							<TableCell colSpan={4} sx={{ backgroundColor: "#f2f2f2" }}>
								Subtotal
							</TableCell>
							<TableCell align="center" sx={{ backgroundColor: "#f2f2f2" }}>$
								{value.totalPrice.toFixed(3)}<FaEthereum />
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell colSpan={4} sx={{ backgroundColor: "#f2f2f2" }}>
								Your total
							</TableCell>
							<TableCell align="center" sx={{ backgroundColor: "#f2f2f2" }}>$
								{value.totalPrice.toFixed(3)} <FaEthereum />
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</TableContainer>
			<Box sx={{backgroundImage: "linear-gradient(to bottom right, #f2f2f2, #c4c4c4)",
						padding: "16px",display: "flex", justifyContent: "right" }}>
			<Button 
				sx={{ backgroundColor: "#222222", color: "#ffffff", borderRadius: "4px", padding: "8px 12px", marginRight: "6px",
					fontWeight: "bold", fontSize: "16px", textTransform: "uppercase", transition: "all 0.3s ease-in-out",
					"&:hover": { backgroundColor: "#f2f2f2", color: "#222222",
					},
				}}>
				<Link to="/" style={{ fontSize: "16px", color: "#ffffff" }}>
				Buy more
				</Link>
			</Button>
			<Button onClick={() => value.clearCart()}
			sx={{ backgroundColor: "#222222", color: "#ffffff", borderRadius: "4px", padding: "8px 12px", marginRight: "6px",
					fontWeight: "bold", fontSize: "16px", textTransform: "uppercase", transition: "all 0.3s ease-in-out",
					"&:hover": { backgroundColor: "#f2f2f2", color: "#222222",
					},
				}}>
				Reset
			</Button>
			<Button onClick={() => value.cart.length > 0? onCheckOutClick() : alert("Please add some items to your cart")}
			 sx={{ backgroundColor: "#222222", color: "#ffffff", borderRadius: "4px", padding: "8px 12px",
					fontWeight: "bold", fontSize: "16px", textTransform: "uppercase", transition: "all 0.3s ease-in-out",
					"&:hover": { backgroundColor: "#f2f2f2", color: "#222222"
					},
				}}>
				Check Out
			</Button>
			</Box>
		</>
	);
}
