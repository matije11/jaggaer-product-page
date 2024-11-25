import { Box, Divider, Paper, Typography } from "@mui/material";

type CardProps = {
  title: string;
  children: React.ReactNode;
};

const Card = ({ title, children }: CardProps) => {
  return (
    <Paper
      sx={{
        p: 2,
        maxWidth: 500,
        width: "100%",
      }}
    >
      <Typography
        variant="body1"
        color="primary"
        sx={{ textTransform: "uppercase", mb: 1 }}
      >
        {title}
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <Box>{children}</Box>
    </Paper>
  );
};

export default Card;
