import React, { Component } from "react";
class AuditTable extends React {
  componentWillMount() {
    this.state({
      jsonRecords: {
        Latest: [
          {
            Date: "31-May-2018 13:31:10",
            Supporting Notes: "05:a",
            Criteria: "a",
            Action: "http://localhost:3000/view",
            ReQuery: "http://localhost:3000/enquiry"
          },
          {
            Date: "31-May-2018 13:14:52",
            Supporting Notes: "05:a",
            Criteria: "aaa",
            Action: "http://localhost:3000/view",
            ReQuery: "http://localhost:3000/enquiry"
          },
          {
            Date: "31-May-2018 12:13:49",
            Supporting Notes: "05:a",
            Criteria: "a",
            Action: "http://localhost:3000/view",
            ReQuery: "http://localhost:3000/enquiry"
          }
        ],
        All: [
          {
          Date: "31-May-2018 13:31:24", Type: "Addresses", Justification: "05:a", Title: "1", Action: "http://localhost:3000/view", ReQuery: "http://localhost:3000/enquiry" 
          },
          { 
            Date: "31-May-2018 13:31:24", Type: "Addresses", Justification: "05:a", Title: "1", Action: "http://localhost:3000/view", ReQuery: "http://localhost:3000/enquiry" 
          },
          {
            Date: "31-May-2018 13:31:24", Type: "PERSON_SUMMARY", Justification: "05:a", Title: "1", Action: "http://localhost:3000/view", ReQuery: "http://localhost:3000/enquiry"
          },
          {
            Date: "31-May-2018 13:31:24", Type: "SINGLE_PERSON", Justification: "05:a", Title: "1", Action: "http://localhost:3000/view", ReQuery: "http://localhost:3000/enquiry"
          },
          {
            Date: "31-May-2018 13:31:24", Type: "Markers", Justification: "a", Title: "1", Action: "http://localhost:3000/view", ReQuery: "http://localhost:3000/enquiry"
          },
          {
            Date: "31-May-2018 13:31:24", Type: "Markers", Justification: "a", Title: "1", Action: "http://localhost:3000/view", ReQuery: "http://localhost:3000/enquiry"
          },
          {
            Date: "31-May-2018 13:31:24", Type: "Markers", Justification: "a", Title: "1", Action: "http://localhost:3000/view", ReQuery: "http://localhost:3000/enquiry"
          },
          {
            Date: "31-May-2018 13:31:24", Type: "Markers", Justification: "a", Title: "1", Action: "http://localhost:3000/view", ReQuery: "http://localhost:3000/enquiry"
          },
          {
            Date: "31-May-2018 13:31:24", Type: "Markers", Justification: "a", Title: "1", Action: "http://localhost:3000/view", ReQuery: "http://localhost:3000/enquiry"
          },
          {
            Date: "31-May-2018 13:31:24", Type: "MENU", Justification: "05:a", Title: "1", Action: "http://localhost:3000/view", ReQuery: "http://localhost:3000/enquiry"
          },
          {
            Date: "31-May-2018 13:31:24", Type: "PERSON_SUMMARY", Justification: "05:a", Title: "1", Action: "http://localhost:3000/view", ReQuery: "http://localhost:3000/enquiry"
          },
          {
            Date: "31-May-2018 13:31:24", Type: "SEARCH", Justification: "05:a", Title: "1", Action: "http://localhost:3000/view", ReQuery: "http://localhost:3000/enquiry"
          },
          {
            Date: "31-May-2018 13:31:24", Type: "SEARCH", Justification: "05:a", Title: "aaa", Action: "http://localhost:3000/view", ReQuery: "http://localhost:3000/enquiry"
          },
          {
            Date: "31-May-2018 13:31:24", Type: "PERSON_SUMMARY", Justification: "05:a", Title: "1", Action: "http://localhost:3000/view", ReQuery: "http://localhost:3000/enquiry"
          },
          {
            Date: "31-May-2018 13:31:24", Type: "SINGLE_PERSON", Justification: "05:a", Title: "1", Action: "http://localhost:3000/view", ReQuery: "http://localhost:3000/enquiry"
          },
          ]
      }
    });
  }
  render() {
    return <table className="dataTab" styles="width: 100%;" />;
  }
}
export default AuditTable;
