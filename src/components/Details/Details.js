import { Box, Grid, Typography } from "@mui/material";

// 1. App NO: "16"
// 3. App Year: "2017"
// 2. App Date: "2017-01-12"
// App Name: "British American Tabacco Investments Limited"
// Institute: "nil"
// 4. App Country: "United Kingdom"
// 5. App City: "nil"
// Priority Date: "2016-01-15"
// PriorityCountry: "GB"
// Abstract: "nil"
// 4IPC: "nil"
// Priority Number
// Publication Acceptance No: "nil"
// Publication Date: "nil"
// Status: "New Application"
// Title:"METHOD"
export const Details = ({ data }) => {
  console.log("data", data);

  if (data) {
    const updatedData = [
      { id: 1, label: "Application Number", value: data["App NO"] },
      { id: 2, label: "Application Year", value: data["App Year"] },
      { id: 3, label: "APplication Date", value: data["App Date"] },

      { id: 4, label: "Applicant Name ", value: data["App Name"] },
      { id: 5, label: "Institute", value: data.Institute },
      { id: 6, label: "Applicant Country", value: data["App Country"] },
      { id: 7, label: "Applicant City", value: data["App City"] },
      { id: 8, label: "Priority Date", value: data["Priority Date"] },
      { is: 9, label: "Priority Country", value: data.PriorityCountry },
      { id: 10, label: "Priority Number", value: data["Priority Number"] },
      { id: 11, label: "Publication Date", value: data["Publication Date"] },
      {
        id: 12,
        label: "Publication Acceptance No",
        value: data["Publication Acceptance No"],
      },
      { id: 14, label: "IPC", value: data.IPC },
      { id: 16, label: "Status", value: data.Status },
      { id: 13, label: "Title", value: data.Title },
      { id: 15, label: "Abstract", value: data.Abstract },
    ];
    return (
      <Box
        style={{
          bgcolor: "background.paper",
          position: "relative",
          overflow: "auto",
          maxHeight: 560,
        }}
      >
        {updatedData.map((item, index) => {
          return (
            <Box
              key={item.id}
              sx={{
                display: "flex",
                flexWrap: "wrap",
                margin: 1,
              }}
            >
              <Typography
                sx={{ fontSize: 14, width: "40%" }}
                color="text.secondary"
                gutterBottom
              >
                {item.label}:
              </Typography>

              <Typography
                sx={{ fontSize: 14 }}
                color="text.primary"
                gutterBottom
              >
                {item.value}
              </Typography>
            </Box>
          );
        })}
        {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Applicant Year
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Applicant Country
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Applicant City
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Application Number
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Application Number
        </Typography>

        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Application Number: {data["App NO"]}
        </Typography>
        <Typography variant="h5" component="div">
          Application Name{data?.["App Name"]}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Application Year{data?.["App Year"]}
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'} 
        </Typography>*/}
      </Box>
    );
  } else {
    return <></>;
  }
};
