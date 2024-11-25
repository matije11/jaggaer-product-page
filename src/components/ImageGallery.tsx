import { Box, IconButton } from "@mui/material";
import { PackageIcon, ZoomInIcon } from "../icons/Icons";

const ImageGallery = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        flexWrap: "wrap",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {[...Array(2)].map((_, index) => (
          <Box
            key={index}
            sx={{
              width: 100,
              height: 100,
              border: "1px solid #ccc",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <PackageIcon
              fill="#e4e4e4"
              style={{ width: "40px", height: "40px" }}
            />
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          width: 320,
          height: 320,
          border: "1px solid #ccc",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <PackageIcon
          fill="#e4e4e4"
          style={{ width: "100px", height: "100px" }}
        />
        <IconButton
          sx={{
            position: "absolute",
            bottom: 3,
            right: 3,
            padding: "8px",
          }}
        >
          <ZoomInIcon fill="#8b8b8b" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ImageGallery;
