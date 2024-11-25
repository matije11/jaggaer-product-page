import { Button, OutlinedInput, InputLabel, Stack } from "@mui/material";
import { AddIcon } from "../icons/Icons";

export type AddToCartProps = {
  quantity: number;
  handleChangeQuantity: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddToCart: () => void;
};

const AddToCart = ({
  handleAddToCart,
  handleChangeQuantity,
  quantity,
}: AddToCartProps) => {
  return (
    <Stack direction="row" spacing={3}>
      <Stack
        direction="row"
        spacing={1}
        sx={{
          alignItems: "center",
        }}
      >
        <OutlinedInput
          id="outlined-adornment-search"
          type="text"
          size="small"
          value={quantity}
          onChange={handleChangeQuantity}
          sx={{ width: "60px", marginRight: 2 }}
        />
        <InputLabel htmlFor="outlined-adornment-search">PCE</InputLabel>
      </Stack>
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddToCart}
        startIcon={<AddIcon fill="#fff" />}
        sx={{
          textTransform: "none",
        }}
      >
        Add to cart
      </Button>
    </Stack>
  );
};

export default AddToCart;
