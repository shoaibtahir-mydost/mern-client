// import * as React from "react";
// import limitLength from "./Tables.css";
// import Link from "@mui/material/Link";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import {
//   Chip,
//   TableContainer,
//   TablePagination,
//   Tooltip,
//   Typography,
// } from "@mui/material";
// import BasicMenu from "../MenuItem/MenuItem";
// import Paper from "@mui/material/Paper";
// import Zoom from "@mui/material/Zoom";

// function preventDefault(event) {
//   event.preventDefault();
// }

// export default function Tables({ userData, showAction }) {
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(10);
//   // const [open, setOpen] = useState(false);

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };

//   return (
//     <React.Fragment>
//       <Typography component="h2" variant="h6" color="primary" gutterBottom>
//         Users
//       </Typography>
//       <Paper sx={{ width: "100%", overflow: "hidden" }}>
//         <TableContainer sx={{ maxHeight: 440 }}>
//           <Table
//             stickyHeader
//             aria-label="sticky table"
//             size="small"
//             sx={{ minWidth: 650 }}
//           >
//             <TableHead>
//               <TableRow>
//                 <TableCell>Application No.</TableCell>
//                 <TableCell>Application Year</TableCell>
//                 <TableCell>Application Date</TableCell>
//                 <TableCell>Applicant Name</TableCell>
//                 <TableCell>Institute</TableCell>
//                 <TableCell>Applicant Country</TableCell>
//                 <TableCell>Applicant City</TableCell>
//                 <TableCell>Priority Date</TableCell>
//                 <TableCell>Priority Country</TableCell>
//                 <TableCell>Priority Number</TableCell>
//                 <TableCell>Publication Date</TableCell>
//                 <TableCell>Publication Acceptance No.</TableCell>
//                 <TableCell>Title</TableCell>
//                 <TableCell>IPC</TableCell>
//                 <TableCell>Abstract</TableCell>
//                 <TableCell>Status</TableCell>
//                 {showAction ? <TableCell>Action</TableCell> : ""}
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {userData.length > 0 ? (
//                 userData.map((row, index) => (
//                   <TableRow key={index}>
//                     <TableCell>{row["App NO"]}</TableCell>
//                     <TableCell>{row["App Year"]}</TableCell>
//                     <TableCell>{row["App Date"]}</TableCell>
//                     <TableCell>
//                       <Tooltip
//                         TransitionComponent={Zoom}
//                         title={row["App Name"]}
//                       >
//                         <span className="limitLength">{row["App Name"]}</span>
//                       </Tooltip>
//                     </TableCell>
//                     <TableCell>
//                       <Tooltip TransitionComponent={Zoom} title={row.Institute}>
//                         <span className="limitLength">{row.Institute}</span>
//                       </Tooltip>
//                     </TableCell>
//                     <TableCell>{row["App Country"]}</TableCell>
//                     <TableCell>{row["App City"]}</TableCell>
//                     <TableCell>{row["Priority Date"]}</TableCell>
//                     <TableCell>{row["PriorityCountry"]}</TableCell>
//                     <TableCell>{row["Priority Number"]}</TableCell>
//                     <TableCell>{row["Publication Date"]}</TableCell>
//                     <TableCell>{row["Publication Acceptance No"]}</TableCell>
//                     <TableCell>
//                       <Tooltip TransitionComponent={Zoom} title={row.Title}>
//                         <span className="limitLength">{row.Title}</span>
//                       </Tooltip>
//                     </TableCell>
//                     <TableCell>{row.IPC}</TableCell>
//                     <TableCell>
//                       <Tooltip TransitionComponent={Zoom} title={row.Abstract}>
//                         <span className="limitLength">{row.Abstract}</span>
//                       </Tooltip>
//                     </TableCell>
//                     <TableCell>{row.Status}</TableCell>
//                     {showAction ? (
//                       <TableCell>
//                         <BasicMenu />
//                       </TableCell>
//                     ) : (
//                       ""
//                     )}
//                   </TableRow>
//                 ))
//               ) : (
//                 <div>No Data</div>
//               )}
//             </TableBody>
//           </Table>
//         </TableContainer>
//         <TablePagination
//           rowsPerPageOptions={[1, 5, 10]}
//           component="div"
//           count={userData.length}
//           rowsPerPage={rowsPerPage}
//           page={page}
//           onPageChange={handleChangePage}
//           onRowsPerPageChange={handleChangeRowsPerPage}
//         />
//       </Paper>
//       {/* <Link color='primary' href='#' onClick={preventDefault} sx={{ mt: 3 }}>
//         See more orders
//       </Link> */}
//     </React.Fragment>
//   );
// }

import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "App NO", headerName: "Application No.", width: 70 },
  { field: "App Year", headerName: "Application Year", width: 130 },
  { field: "App Date", headerName: "Application Date", width: 130 },
  { field: "App Name", headerName: "Applicant Name", width: 130 },
  { field: "Institute", headerName: "Institute", width: 130 },
  { field: "App Country", headerName: "Applicant Country", width: 130 },
  { field: "App City", headerName: "Applicant City", width: 130 },
  { field: "Priority Date", headerName: "Priority Date", width: 130 },
  { field: "PriorityCountry", headerName: "Priority Country", width: 130 },
  { field: "Priority Number", headerName: "Priority Number", width: 130 },
  { field: "Publication Date", headerName: "Publication Date", width: 130 },
  {
    field: "Publication Acceptance No",
    headerName: "Publication Acceptance No.",
    width: 130,
  },
  { field: "Title", headerName: "Title", width: 130 },
  { field: "IPC", headerName: "IPC", width: 130 },
  { field: "Abstract", headerName: "Abstract", width: 130 },
  { field: "Status", headerName: "Status", width: 130 },
  // { field: "age", headerName: "Age", width: 90 },
  // {
  //   field: "fullName",
  //   headerName: "Full name",
  //   description: "This column has a value getter and is not sortable.",
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  // },
];

export default function Tables({ userData, showAction }) {
  const rows = userData;
  for (let i = 0; i < rows.length; i++) {
    rows[i].id = i;
    if (rows[i]["Priority Number"] == "") {
      rows[i]["Priority Numnber"] = "nil";
    }
  }
  return (
    <div style={{ height: 648, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10, 50, 100]}
        checkboxSelection
      />
    </div>
  );
}
