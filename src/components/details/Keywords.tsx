import { Box, Chip, Stack, Typography } from "@mui/material";

type KeywordsProps = {
  keywords: string[];
};

const Keywords = ({ keywords }: KeywordsProps) => (
  <Box mt={1}>
    <Typography variant="body1" sx={{ color: "#8b8b8b" }}>
      Keywords
    </Typography>
    <Stack direction="row" spacing={1} flexWrap="wrap">
      {keywords.map((keyword) => (
        <Chip
          key={keyword}
          label={keyword}
          sx={{
            background: "#ced4db",
            color: "#fff",
            textTransform: "uppercase",
          }}
        />
      ))}
    </Stack>
  </Box>
);

export default Keywords;
