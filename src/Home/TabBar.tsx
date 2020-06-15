import React from "react";
import {
  makeStyles,
  withStyles,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

interface StyledTabsProps {
  value: number;
  onChange: (event: React.ChangeEvent<{}>, newValue: number) => void;
}

const StyledTabs = withStyles({
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    "& > div": {
      maxWidth: 40,
      width: "100%",
      backgroundColor: "#fff",
    },
  },
})((props: StyledTabsProps) => (
  <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />
));

interface StyledTabProps {
  label: string;
}

const StyledTab = withStyles((theme: Theme) =>
  createStyles({
    root: {
      textTransform: "none",
      color: "#424242",
      fontFamily: "typeface-roboto",
      fontWeight: theme.typography.fontWeightBold,
      fontSize: theme.typography.pxToRem(15),
      marginRight: theme.spacing(1),
      "&:focus": {
        opacity: 1,
      },
    },
  })
)((props: StyledTabProps) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flex: 1,
    backgroundColor: "#d5dff0",
  },
}));

type HomeProps = {
  value: number;
  setValue: (newTabIndex: number) => void;
};

const Home = ({ value, setValue }: HomeProps) => {
  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <div>
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="styled tabs example"
        >
          <StyledTab label="about me" />
          <StyledTab label="projects" />
          <StyledTab label="tbl" />
        </StyledTabs>
      </div>
    </div>
  );
};
export default Home;
