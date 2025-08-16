import React, { useContext } from "react";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Avatar,
  Chip,
  Button,
} from "@mui/material";
import styled from "styled-components";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ThemeContext from "../../../context/ThemeContext";

// Sample data
const orders = [
  {
    id: "275936",
    quantity: 1,
    product: {
      name: "iPhone 15 pro max",
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch_GEO_US?wid=40&hei=40&fmt=jpeg&qlt=95&.v=1693009284541",
    },
    channel: {
      name: "ebay",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/120px-EBay_logo.svg.png",
    },
    customer: {
      name: "Gabriella Golden",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    },
    total: "$ 400.00",
    delivery: "Today",
  },
  {
    id: "415368",
    quantity: 4,
    product: {
      name: "White Danim Tshit M...",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=40&h=40&fit=crop&auto=format",
    },
    channel: {
      name: "walmart",
      logo: "https://1000logos.net/wp-content/uploads/2017/05/Font-Walmart-Logo.jpg",
    },
    customer: {
      name: "Harris Santana",
      avatar: "https://randomuser.me/api/portraits/men/36.jpg",
    },
    total: "$ 151.00",
    delivery: "Today",
  },
  {
    id: "275063",
    quantity: 2,
    product: {
      name: "David Beckham class...",
      image:
        "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=40&h=40&fit=crop&auto=format",
    },
    channel: {
      name: "facebook",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/120px-2021_Facebook_icon.svg.png",
    },
    customer: {
      name: "Lilia Ponce",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    total: "$ 167.00",
    delivery: "Tomorrow",
  },
  {
    id: "274778",
    quantity: 3,
    product: {
      name: "Samsung i-20 serie...",
      image:
        "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=40&h=40&fit=crop&auto=format",
    },
    channel: {
      name: "amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/120px-Amazon_logo.svg.png",
    },
    customer: {
      name: "Rehan Chase",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    },
    total: "$ 262.00",
    delivery: "Tomorrow",
  },
  {
    id: "638032",
    quantity: 5,
    product: {
      name: "Nykaa Red lipstick",
      image:
        "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=40&h=40&fit=crop&auto=format",
    },
    channel: {
      name: "etsy",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Etsy_logo.svg/120px-Etsy_logo.svg.png",
    },
    customer: {
      name: "Maxim Bray",
      avatar: "https://randomuser.me/api/portraits/men/44.jpg",
    },
    total: "$ 319.00",
    delivery: "05/01/2023",
  },
];

// Styled components
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  padding: "16px",
  borderBottom: `1px solid ${theme.colors.border.card}`,
}));

const StyledTableHeadCell = styled(TableCell)(({ theme }) => ({
  padding: "0 16px",
  borderBottom: `1px solid ${theme.colors.border.card}`,
  color: theme.colors.text.secondary,
  fontWeight: 500,
  fontSize: "12px",
  height: "40px",
}));

const QuantityLabel = styled(Typography)(({ theme }) => ({
  color: theme.colors.text.secondary,
  marginRight: theme.spacing(1),
}));

const ProductWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));

const ChannelChip = styled(Chip)(({ theme }) => ({
  borderRadius: 16,
  height: 28,
  "& .MuiChip-avatar": {
    width: 16,
    height: 16,
  },
}));

const ViewMoreButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
  textTransform: "none",
  color: theme.colors.primary.main,
}));

const RecentOrders = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: 2,
        overflow: "hidden",
        border: `1px solid ${theme.colors.border.card}`,
        backgroundColor: theme.colors.background.main,
      }}
    >
      <Box
        sx={{
          padding: "12px 16px",
          borderBottom: `1px solid ${theme.colors.border.card}`,
        }}
      >
        <Typography
          variant="h6"
          fontWeight="600"
          sx={{
            color: theme.colors.text.primary,
            fontSize: "18px",
          }}
        >
          Recent Orders
        </Typography>
      </Box>

      <TableContainer>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow
              style={{
                backgroundColor: theme.colors.background.card,
                fontSize: "12px",
              }}
            >
              <StyledTableHeadCell>ORDER ID</StyledTableHeadCell>
              <StyledTableHeadCell>PRODUCTS</StyledTableHeadCell>
              <StyledTableHeadCell>CUSTOMER</StyledTableHeadCell>
              <StyledTableHeadCell>CHANNEL</StyledTableHeadCell>
              <StyledTableHeadCell>TOTAL</StyledTableHeadCell>
              <StyledTableHeadCell>DELIVERY DATE</StyledTableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <StyledTableCell>{order.id}</StyledTableCell>
                <StyledTableCell>
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "8px" }}
                  >
                    <QuantityLabel sx={{ color: theme.colors.text.secondary }}>
                      x{order.quantity}
                    </QuantityLabel>
                    <ProductWrapper>
                      <Avatar
                        variant="rounded"
                        src={order.product.image}
                        alt={order.product.name}
                        sx={{ width: 36, height: 36, mr: 1 }}
                      />
                      <Typography variant="body2">
                        {order.product.name}
                      </Typography>
                    </ProductWrapper>
                  </Box>
                </StyledTableCell>
                <StyledTableCell>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Avatar
                      src={order.customer.avatar}
                      alt={order.customer.name}
                      sx={{ width: 32, height: 32, mr: 1 }}
                    />
                    <Typography variant="body2">
                      {order.customer.name}
                    </Typography>
                  </Box>
                </StyledTableCell>
                <StyledTableCell>
                  <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
                    <ChannelChip
                      variant="outlined"
                      size="small"
                      label={order.channel.name}
                      avatar={
                        <Avatar
                          alt={order.channel.name}
                          src={order.channel.logo}
                        />
                      }
                    />
                  </Box>
                </StyledTableCell>
                <StyledTableCell>
                  <Typography variant="body2">{order.total}</Typography>
                </StyledTableCell>
                <StyledTableCell>
                  <Typography variant="body2">{order.delivery}</Typography>
                </StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <ViewMoreButton
          endIcon={
            <ArrowForwardIcon
              fontSize="small"
              sx={{
                fontSize: "12px",
                fontWeight: 400,
                lineHeight: "18px",
              }}
            />
          }
        >
          View 256 more orders
        </ViewMoreButton>
      </Box>
    </Paper>
  );
};

export default RecentOrders;
