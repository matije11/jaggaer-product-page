import { Box, Link, Stack, Typography } from "@mui/material";
import { Attachment } from "../../types/types";
import { AttachmentIcon } from "../../icons/Icons";

type AttachmentsProps = {
  files: Attachment[];
};

const AttachmentItem = ({ file }: { file: Attachment }) => (
  <Stack direction="row" spacing={1} alignItems="center">
    <AttachmentIcon style={{ width: "20px" }} />
    <Typography variant="body2">
      <Link
        href={file.file_link}
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
        {file.file_label}
      </Link>
    </Typography>
  </Stack>
);

const Attachments = ({ files }: AttachmentsProps) => {
  return (
    <Box mt={1}>
      <Typography variant="body1" sx={{ color: "#8b8b8b" }}>
        Attachments
      </Typography>
      <ul style={{ padding: 0, margin: 0 }}>
        {files.map((file, index) => (
          <li key={index} style={{ listStyle: "none" }}>
            <AttachmentItem file={file} />
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default Attachments;
