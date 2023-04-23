import { TableContainer } from "@mui/material";
import React from "react";
import { Paper, Table, TableHead, TableBody, TableRow, TableCell } from "@mui/material";

function Order( {order} ) {
	return (
		<>
        <TableContainer component={Paper} sx={{ marginTop: 3 }}>
            <Table sx={{ minWidth: 800 }} aria-label="spanning table">
                <TableHead sx={{ backgroundImage: "linear-gradient(to bottom right, #F8A170, #FFCD61)" }}>
                <TableCell align="center" colSpan={6}>Order Nro</TableCell>
                </TableHead>
                <TableBody sx={{ display: "flex", paddingTop: "30px", 
                paddingBottom: "5px", justifyContent: "center" }}>
                    Dear Customer, your order has been placed successfully.
                </TableBody>
                <TableRow sx={{ display: "flex", paddingTop: "30px", 
                paddingBottom: "30px", justifyContent: "center" }}>Order number:{" "}
                {order}
            </TableRow>
            </Table>
        </TableContainer>
		</>
	);
}

export default Order;
