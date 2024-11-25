import { useEffect, useState } from "react";
import { Box, Stack } from "@mui/material";
import Header from "./Header";
import ImageGallery from "./ImageGallery";
import Card from "./Card";
import ProductDetails from "./ProductDetails";
import AddToCart from "./AddToCard";
import ProductDescription from "./ProductDescription";
import Features from "./details/Features";
import Attachments from "./details/Attachments";
import Keywords from "./details/Keywords";
import Shipping from "./pricing&shipping/Shipping";
import Pricing from "./pricing&shipping/Pricing";
import dataJson from "../data/data.json";
import { Data } from "../types/types";

const ProductPage = () => {
  const data: Data = dataJson;
  const { article } = data;
  const [showAddToCartInHeader, setShowAddToCartInHeader] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // detect scroll position and toggle the AddToCart visibility in the header
  useEffect(() => {
    const handleScroll = () => {
      // point where AddToCart is not visible
      setShowAddToCartInHeader(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChangeQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(e.target.value));
  };
  const handleAddToCart = () => {
    setCartItemCount((prev) => prev + quantity);
  };

  return (
    <>
      <Header
        cartItemCount={cartItemCount}
        showAddToCart={
          showAddToCartInHeader ? (
            <AddToCart
              handleAddToCart={handleAddToCart}
              handleChangeQuantity={handleChangeQuantity}
              quantity={quantity}
            />
          ) : null
        }
      />
      <Box
        sx={{
          background: "#fff",
          paddingBottom: 3,
          paddingTop: "80px",
          paddingLeft: 2,
        }}
      >
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <ImageGallery />
          <ProductDetails
            article={article}
            handleAddToCart={handleAddToCart}
            handleChangeQuantity={handleChangeQuantity}
            quantity={quantity}
          />
        </Stack>
      </Box>
      <Box
        sx={{
          maxWidth: "1000px",
        }}
      >
        <ProductDescription description={article.description_long} />
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          sx={{ m: 2 }}
        >
          <Card title="Details">
            <Features features={article.features} />
            <Attachments files={article.attachments} />
            <Keywords keywords={article.keywords} />
          </Card>
          <Card title="Pricing & Shipping">
            <Shipping article={article} />
            <Pricing price_breaks={article.price_breaks} article={article} />
          </Card>
        </Stack>
      </Box>
    </>
  );
};

export default ProductPage;
