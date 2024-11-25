import { Typography, Box } from "@mui/material";

type ProductDescriptionProps = {
  description: string;
};

const ProductDescription = ({ description }: ProductDescriptionProps) => {
  return (
    <Box m={2}>
      <Typography variant="body1" color="primary">
        DESCRIPTION
      </Typography>
      <Typography
        variant="subtitle2"
        sx={{
          fontWeight: 600,
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default ProductDescription;
