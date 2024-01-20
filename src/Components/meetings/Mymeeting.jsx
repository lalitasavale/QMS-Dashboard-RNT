import React, { useState } from 'react'
import '../Styles/Mymeeting.css'
import Headerr from '../Header/Headerr'
import Sidebarr from '../Sidebar/Sidebarr'
import Footer from '../Footer/Footer'
import { LiaLongArrowAltLeftSolid } from "react-icons/lia";
import MaterialTable from 'material-table'
import { ThemeProvider, createTheme } from '@mui/material';

function Mymeeting() {

    const defaultMaterialTheme = createTheme();

    const dataa = [{ 'meetingSubject': 'QMS Meeting 1', 'startDate': '19-Jan-2024 , 05:00 PM - 07:00 PM', 'duration': '00h:30m', 'mom': 'N/A' }, { 'meetingSubject': 'QMS Meeting 1', 'startDate': '19-Jan-2024 , 05:00 PM - 07:00 PM', 'duration': '00h:30m', 'mom': 'N/A' },
    { 'meetingSubject': 'QMS Meeting 1', 'startDate': '19-Jan-2024 , 05:00 PM - 07:00 PM', 'duration': '00h:30m', 'mom': 'N/A' },
    { 'meetingSubject': 'QMS Meeting 1', 'startDate': '19-Jan-2024 , 05:00 PM - 07:00 PM', 'duration': '00h:30m', 'mom': 'N/A' },
    { 'meetingSubject': 'QMS Meeting 1', 'startDate': '19-Jan-2024 , 05:00 PM - 07:00 PM', 'duration': '00h:30m', 'mom': 'N/A' },
    { 'meetingSubject': 'QMS Meeting 1', 'startDate': '19-Jan-2024 , 05:00 PM - 07:00 PM', 'duration': '00h:30m', 'mom': 'N/A' }]

    const [data, setData] = useState(dataa);

    const tableHeaderStyle = {
        backgroundColor: "#F6E6FC",
        color: "#700098",
        fontWeight: "bold",
        height: 5,
    };

    const titleStyle = {
        borderRight: '1px solid gray',
        height:'5px',
        width:'220px',
        // backgroundColor:'red'
    }

    const dataStyle = {
        borderRight: '1px solid gray',
        fontWeight: "600",
        color: "black",
        height:'5px',
        width:'100px',
       
    }
    
    const columns = [
        {
          title: "TITLE",
          field: "meetingSubject",
          render: (rowData) => {
    
            return (
              <div style={dataStyle} className="hr-table-row-data">
                {rowData?.meetingSubject}
              </div>
            );
          },
        },
        {
          title: "DATE & TIME",
          field: "startDate",
          render: (rowData) => {
    
            return (
              <div style={titleStyle} className="hr-table-row-data">
                {rowData?.startDate}
              </div>
            );
          },
        },
        {
          title: "DURATION",
          field: "duration",
          render: (rowData) => {
    
            return (
              <div style={titleStyle} className="hr-table-row-data">
                {rowData?.duration}
              </div>
            );
          },
        },
        {
          title: "MOM",
          field: "mom",
          render: (rowData) => {
            console.log("rowData=========MOM============ ::", rowData);
            return (
              <div style={{ ...titleStyle, overflow: "hidden", textOverflow: "ellipsis", display: "flex", justifyContent: "center", alignItems: "center" }} className="hr-table-row-data elipsisData" >
                <span className="elipsisData" style={{ width: 240 }}>{rowData?.mom}</span>
              </div>
            );
          },
        },
        {
          title: "ACTION",
          field: "",
          render: (props) => {
            return (
            <div className="action-btns" style={{ display: "flex", gap: "3px" }}>
              <span className="hr-dot"></span>
              <span className="hr-dot"></span>
              <span className="hr-dot"></span>
              <div className="tooltip-box">
                <div className="tooltip-item" id="normal" >
                  {/* <BsEye fill='#00ADEE' /> <p>View</p> */}
                </div>
                <div className="tooltip-item" 
                id={"normal"} 
               
                >
                  {/* <SlPencil fill='#00ADEE' />  */}
                  <p>Edit</p>
                </div>
                <div className="tooltip-item"  
                id='normal'
                >
                  {/* <AiOutlineDelete fill='#00ADEE'  */}
                  <p>Delete</p>
                </div>
              </div>
            </div>)
          },
        },
      ];
    



    return (
        <div className='container'>
            <header><Headerr /></header>
            <aside>
                <Sidebarr />
            </aside>
            <main >
                <div className='conponent-cont'>
                    <div className='cal-cont'>
                        <div className='comp-div1'>
                            <div> <LiaLongArrowAltLeftSolid size={30} color='skyblue' /></div> <div className='dashbord-text'>My Meeting &lt; Dashboard</div>
                        </div>
                        <div className='comp-div1'>
                            <div> <LiaLongArrowAltLeftSolid size={30} color='skyblue' /></div> <div className='dashbord-text'>My Meeting &lt; Dashboard</div>
                        </div>
                        <div className='component-tab-cont'>
                            <div className='hrtab'>
                                HR
                            </div>
                            <div className='ittab'>
                                IT
                            </div>
                            <div className='grtab'>
                                Governance
                            </div>
                            <div className='fttab'>
                                Facillity
                            </div>

                        </div>
                        <div className='table-cont'>
                            <ThemeProvider theme={defaultMaterialTheme}>
                                <MaterialTable
                                    localization={{ body: { emptyDataSourceMessage: <span className="no_data_found_table">No data found</span> } }}
                                    data={data}
                                    columns={columns}
                                    // icons={tableIcons}
                                    options={{
                                        toolbar: false,
                                        search: false,
                                        pageSizeOptions: [5, 10, 15, 20],
                                        pageSize: 10,

                                        
                                        
                                        headerStyle: {
                                            position: "sticky",
                                            top: -1,
                                            ...tableHeaderStyle,
                                        },

                                    }}

                                />
                            </ThemeProvider>
                        </div>
                    </div>
                </div>
            </main>
            <footer>
                <Footer />
            </footer>

        </div>

    )
}

export default Mymeeting