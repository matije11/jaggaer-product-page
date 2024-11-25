import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Divider,
  useMediaQuery,
} from "@mui/material";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import { Data } from "../types/types";
import { CartIcon, FavoriteIcon, FactsIcon } from "../icons/Icons";
import dataJson from "../data/data.json";

type HeaderProps = {
  cartItemCount?: number;
  showAddToCart: React.ReactNode | null;
};

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Header = ({ cartItemCount, showAddToCart }: HeaderProps) => {
  const data: Data = dataJson;
  const { article } = data;

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // check if the screen is small
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("sm"));

  return (
    <AppBar
      position="fixed"
      sx={{
        background: "#fff",
        borderBottom: isScrolled ? "none" : "1px solid #ccc",
        boxShadow: isScrolled ? "0px 4px 8px rgba(0, 0, 0, 0.1)" : "none",
        zIndex: 1100,
      }}
      elevation={0}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          color="primary"
          sx={{
            flexGrow: 1,
            fontWeight: "bold",
            fontSize: isMobile ? "1rem" : "1.5rem", // smaller font on mobile
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {article.title}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {/* show AddToCart only on larger screens */}
          {!isMobile && showAddToCart}

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton size="large" color="inherit" sx={{ marginLeft: 1 }}>
              <FavoriteIcon fill="#8b8b8b" />
            </IconButton>
            <IconButton size="large" color="inherit" sx={{ marginLeft: 1 }}>
              <FactsIcon fill="#8b8b8b" />
            </IconButton>
            <Divider orientation="vertical" flexItem sx={{ marginX: 1 }} />
            <IconButton size="large" color="inherit" sx={{ marginLeft: 1 }}>
              <StyledBadge badgeContent={cartItemCount} color="error">
                <CartIcon fill="#8b8b8b" />
              </StyledBadge>
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
