import { Typography } from "@mui/material"

const ClearButtonAside = ({children, ...others}) => {
  return (
    <Typography
        {...others}
        sx={{
          fontSize: "13px",
          pb: 0.1,
          borderBottom: "1px dashed #a0a2a7",
          display: "inline-block",
          mb: 2,
          cursor: "pointer",
          transition: "0.3s linear border",
          "&:hover": {
            borderBottom: "1px solid #a0a2a7",
          },
        }}
      >
        {children}
      </Typography>
  )
}

export default ClearButtonAside