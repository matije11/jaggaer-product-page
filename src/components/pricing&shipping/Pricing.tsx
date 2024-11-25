import { Divider, Stack, Typography } from "@mui/material";
import { Article } from "../../types/types";
import { formatNumber } from "../../utils/formatNumber";

type PricingProps = {
  price_breaks: Record<string, number>;
  article: Article;
};

const Pricing = ({ price_breaks, article }: PricingProps) => {
  return (
    <Stack spacing={2} mt={4}>
      <Typography variant="body1" sx={{ color: "#8b8b8b" }}>
        Price breaks
      </Typography>
      <Divider sx={{ width: 220 }} style={{ margin: 0 }} />
      {Object.entries(price_breaks).map(([key, value], index) => (
        <Stack key={index} spacing={1} style={{ margin: 0 }}>
          <Typography variant="body2" sx={{ fontWeight: 600 }}>
            ex {key} {article.unit} - {formatNumber(value)} {article.currency}/
            {article.unit}
          </Typography>
          <Divider sx={{ width: 220 }} />
        </Stack>
      ))}
    </Stack>
  );
};

export default Pricing;
