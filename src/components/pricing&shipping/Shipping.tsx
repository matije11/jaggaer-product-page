import { Box, Typography } from "@mui/material";
import { Article } from "../../types/types";
import { formatNumber } from "../../utils/formatNumber";

type ShippingProps = {
  article: Article;
};

const ShippingItem = ({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) => (
  <Box sx={{ display: "flex", gap: 1 }}>
    <Typography variant="body2" sx={{ color: "#8b8b8b" }}>
      {label}
    </Typography>
    <Typography variant="body2" sx={{ fontWeight: 600 }}>
      {value}
    </Typography>
  </Box>
);

const Shipping = ({ article }: ShippingProps) => {
  return (
    <>
      <ul style={{ padding: 0, margin: 0, marginLeft: 20 }}>
        <li>
          <ShippingItem
            label="Minimum order:"
            value={`${article.minimum_order_quantity} ${article.unit}`}
          />
        </li>
        <li>
          <ShippingItem
            label="Shipping:"
            value={`${formatNumber(article.transport_costs)} ${
              article.currency
            }`}
          />
        </li>
        <li>
          <ShippingItem
            label="Delivery:"
            value={`${article.delivery_time} days`}
          />
        </li>
      </ul>
    </>
  );
};

export default Shipping;
