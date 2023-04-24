import { TableContainer } from "@mui/material";
import React from "react";
import { Paper, Table, TableHead, TableBody, TableRow, TableCell } from "@mui/material";
import { useState, useEffect } from "react";
import "./style.css";


function Order({ order }) {
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 4000);
    }, []);
  
    return (
      <>
        {loading ? (
          		  <div className="div-loader">
                    <div className="loader"></div>
                  </div>
        ) : (
          <TableContainer component={Paper} sx={{ marginTop: 3 }}>
            <Table sx={{ minWidth: 800 }} aria-label="spanning table">
              <TableHead  sx={{ backgroundImage: "linear-gradient(to bottom right, #F8A170, #FFCD61)",
                }} >
                <TableRow>
                <TableCell align="center" colSpan={6}>
                  Order Nro
                </TableCell>
                </TableRow>
              </TableHead>
              <TableRow sx={{ display: "flex", paddingTop: "30px", paddingBottom: "5px", justifyContent: "center",
                }} >
                Dear Customer, your order has been placed successfully.
              </TableRow>
              <TableRow sx={{ display: "flex", paddingTop: "30px", paddingBottom: "30px", justifyContent: "center",
                }} >
                Order number: {order}
              </TableRow>
            </Table>
          </TableContainer>
        )}
      </>
    );
  }

export default Order;
