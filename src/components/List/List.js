import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Divider, Grid, List, Typography } from "@mui/material";
import { Details } from "../Details/Details";

export default function VirtualizedList(props) {
  const { userData } = props;
  const [data, setData] = useState();

  // useEffect(() => {
  //   if (!userData) {
  //     setData();
  //   }
  // }, []);

  const sendDetails = (item) => {
    setData(item);
  };

  return (
    <Grid container>
      <Grid
        item
        xs={6}
        sx={{
          width: "100%",
          height: 400,
          maxWidth: 360,
          bgcolor: "background.paper",
        }}
      >
        <List
          sx={{
            width: "150%",
            maxWidth: "100%",
            bgcolor: "background.paper",
            position: "relative",
            overflow: "auto",
            maxHeight: 560,
          }}
        >
          {userData?.map((item, index) => {
            return (
              <ListItem key={index} component="div" disablePadding>
                <ListItemButton
                  onClick={() => {
                    sendDetails(item);
                  }}
                >
                  <ListItemText
                    primary={`${item["App NO"]}. ${item["App Name"]}`}
                    secondary={
                      <>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {item.Status}
                          <span style={{ marginLeft: "12px" }}>
                            {item["App Country"]}
                          </span>
                        </Typography>
                        <br />
                        {`Priority Date: ${item["Priority Date"]} - Application Date: ${item["App Date"]}`}
                      </>
                    }
                  />
                </ListItemButton>
                <Divider variant="inset" component="li" />
              </ListItem>
            );
          })}
        </List>
      </Grid>
      <Grid item xs={6}>
        <Details data={data} />
      </Grid>
    </Grid>
  );
}
