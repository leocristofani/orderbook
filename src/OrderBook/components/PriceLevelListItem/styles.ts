import { makeStyles, Theme } from "@material-ui/core";

interface StyleProps {
  isBid: boolean;
}

const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
  root: {
    zIndex: 1,
    marginBottom: 1,
    position: "relative",
    [theme.breakpoints.up("sm")]: {
      flexDirection: ({ isBid }) => (isBid ? "row" : "row-reverse"),
    },
  },
}));

export default useStyles;
