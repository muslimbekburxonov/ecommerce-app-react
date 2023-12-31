import { Typography } from "@mui/material";
import { PropTypes } from "prop-types";

const CategoryAsideTitle = ({ children, ...others }) => {
  return (
    <Typography variant="subtitle1" fontWeight={600} mt={3} {...others}>
      {children}
    </Typography>
  );
};

CategoryAsideTitle.propTypes = {
  children: PropTypes.string.isRequired,
};

export default CategoryAsideTitle;
