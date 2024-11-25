import { Box, Typography } from "@mui/material";
import { Feature } from "../../types/types";

type FeatureProps = {
  features: Feature;
};

const FeatureItem = ({ label, value }: { label: string; value: string }) => (
  <Box sx={{ display: "flex", gap: 1 }}>
    <Typography variant="body2" sx={{ color: "#8b8b8b" }}>
      {label}:
    </Typography>
    <Typography variant="body2" sx={{ fontWeight: 600 }}>
      {value}
    </Typography>
  </Box>
);

const Features = ({ features }: FeatureProps) => {
  return (
    <Box>
      <Typography variant="body1" sx={{ color: "#8b8b8b" }}>
        Features
      </Typography>
      <ul style={{ padding: 0, margin: 0, marginLeft: 20 }}>
        {Object.entries(features).map(([key, value], index) => (
          <li key={index}>
            <FeatureItem label={key} value={String(value)} />
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default Features;
