import { Box, Link, Stack, Typography, IconButton } from "@mui/material";
import AddToCart from "./AddToCard";
import { styled } from "@mui/material/styles";
import { Article } from "../types/types";
import type { AddToCartProps } from "./AddToCard";
import { formatNumber } from "../utils/formatNumber";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { DiscountIcon } from "../icons/Icons";

type ProductDetailsProps = {
  article: Article;
} & AddToCartProps;

const StyledRating = styled(Rating)(() => ({
  "& .MuiRating-iconFilled": {
    color: "#faaf00",
  },
}));

const ProductDetails = ({
  article,
  handleAddToCart,
  handleChangeQuantity,
  quantity,
}: ProductDetailsProps) => {
  return (
    <Box sx={{ maxWidth: 800, margin: "0 auto", padding: 2 }}>
      <Typography
        variant="h6"
        sx={{
          fontWeight: 600,
          color: "#333",
          marginBottom: 1,
          lineHeight: 1.5,
        }}
      >
        {article.description_short}
      </Typography>

      <Typography
        variant="body2"
        sx={{
          marginBottom: 2,
          color: "#8b8b8b",
        }}
      >
        by{" "}
        <Link
          href={article.supplier_link}
          target="_blank"
          rel="noopener"
          sx={{
            color: "#5d8398",
            textDecoration: "none",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          {article.supplier_name}
        </Link>
      </Typography>

      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        sx={{ marginTop: 2 }}
      >
        <StyledRating
          name="customized-color"
          defaultValue={article.stars}
          precision={0.1}
          icon={<StarIcon fontSize="inherit" />}
          emptyIcon={<StarBorderIcon fontSize="inherit" />}
        />
        <ArrowDropDownIcon />
      </Stack>

      <Stack direction="row" spacing={1} mt={3} alignItems="center">
        <Typography variant="body1" sx={{ color: "#8b8b8b" }}>
          <strong style={{ color: "black" }}>
            {formatNumber(article.price)} {article.currency}
          </strong>{" "}
          + {article.transport_costs} {article.currency} shipping
        </Typography>
        <IconButton sx={{ padding: 0 }}>
          <DiscountIcon />
        </IconButton>
      </Stack>

      <Typography variant="body2" sx={{ marginTop: 1, color: "#8b8b8b" }}>
        All prices incl. {article.vat_percent} % taxes
      </Typography>

      <Box sx={{ marginTop: 3 }}>
        <AddToCart
          handleAddToCart={handleAddToCart}
          handleChangeQuantity={handleChangeQuantity}
          quantity={quantity}
        />
      </Box>
    </Box>
  );
};

export default ProductDetails;
