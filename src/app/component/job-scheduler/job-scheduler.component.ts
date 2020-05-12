import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material';

export interface PeriodicElement {
  Table: string;
  Column: string;
  Selected: boolean;
  DataFiled: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
{Table: "incidents_main", Column: "inc_name", Selected: false, DataFiled: "Name"},
{Table: "incidents_main", Column: "source_of_record", Selected: false, DataFiled: "Source of record"},
{Table: "incidents_main", Column: "recordid", Selected: false, DataFiled: "ID"},
{Table: "incidents_main", Column: "inc_ourref", Selected: false, DataFiled: "Ref"},
{Table: "incidents_main", Column: "inc_last_updated", Selected: false, DataFiled: "Current approval status"},
{Table: "incidents_main", Column: "rep_approved", Selected: false, DataFiled: "Approval status"},
{Table: "incidents_main", Column: "inc_dreported", Selected: false, DataFiled: "Reported"},
{Table: "incidents_main", Column: "inc_dopened", Selected: false, DataFiled: "Opened date"},
{Table: "incidents_main", Column: "inc_submittedtime", Selected: false, DataFiled: "Submitted time"},
{Table: "incidents_main", Column: "inc_mgr", Selected: false, DataFiled: "Handler"},
{Table: "incidents_main", Column: "inc_head", Selected: false, DataFiled: "Manager"},
{Table: "incidents_main", Column: "location_id", Selected: false, DataFiled: "Location"},
{Table: "incidents_main", Column: "other_location", Selected: false, DataFiled: "Other location"},
{Table: "incidents_main", Column: "exact_location", Selected: false, DataFiled: "Exact location"},
{Table: "incidents_main", Column: "service_id", Selected: false, DataFiled: "Service"},
{Table: "incidents_main", Column: "other_service", Selected: false, DataFiled: "Other service"},
{Table: "incidents_main", Column: "inc_type", Selected: false, DataFiled: "Type"},
{Table: "incidents_main", Column: "inc_category", Selected: false, DataFiled: "Category"},
{Table: "incidents_main", Column: "inc_subcategory", Selected: false, DataFiled: "Sub category"},
{Table: "incidents_main", Column: "inc_cnstitype", Selected: false, DataFiled: "Codes"},
{Table: "incidents_main", Column: "inc_affecting_tier_zero", Selected: false, DataFiled: "Incident affecting"},
{Table: "incidents_main", Column: "inc_type_tier_one", Selected: false, DataFiled: "Incident type tier one"},
{Table: "incidents_main", Column: "inc_type_tier_two", Selected: false, DataFiled: "Incident type tier two"},
{Table: "incidents_main", Column: "inc_type_tier_three", Selected: false, DataFiled: "Incident type tier three"},
{Table: "incidents_main", Column: "inc_result", Selected: false, DataFiled: "Result"},
{Table: "incidents_main", Column: "inc_severity", Selected: false, DataFiled: "Severity"},
{Table: "incidents_main", Column: "sac_score", Selected: false, DataFiled: "SAC Score"},
{Table: "incidents_main", Column: "inc_result_initial", Selected: false, DataFiled: "Result (Initial)"},
{Table: "incidents_main", Column: "sac_score_initial", Selected: false, DataFiled: "SAC Score (Initial)"},
{Table: "incidents_main", Column: "inc_dincident", Selected: false, DataFiled: "Incident date"},
{Table: "incidents_main", Column: "inc_time", Selected: false, DataFiled: "Time"},
{Table: "incidents_main", Column: "inc_time_band", Selected: false, DataFiled: "Time band"},
{Table: "incidents_main", Column: "INC_NOTES", Selected: false, DataFiled: "Description"},
{Table: "incidents_main", Column: "INC_ACTIONTAKEN", Selected: false, DataFiled: "Action taken"},
{Table: "incidents_main", Column: "inc_dsched", Selected: false, DataFiled: "Closed"}
];

const initial: PeriodicElement[] = [
  {Table: "incidents_main", Column: "inc_name", Selected: false, DataFiled: "Name"},
  {Table: "incidents_main", Column: "source_of_record", Selected: false, DataFiled: "Source of record"},
  {Table: "incidents_main", Column: "recordid", Selected: false, DataFiled: "ID"},
  {Table: "incidents_main", Column: "inc_ourref", Selected: false, DataFiled: "Ref"},
  {Table: "incidents_main", Column: "inc_last_updated", Selected: false, DataFiled: "Current approval status"},
  {Table: "incidents_main", Column: "rep_approved", Selected: false, DataFiled: "Approval status"},
  {Table: "incidents_main", Column: "inc_dreported", Selected: false, DataFiled: "Reported"},
  {Table: "incidents_main", Column: "inc_dopened", Selected: false, DataFiled: "Opened date"}
];

@Component({
  selector: 'app-job-scheduler',
  templateUrl: './job-scheduler.component.html',
  styleUrls: ['./job-scheduler.component.css']
})
export class JobSchedulerComponent implements OnInit {

  data = Object.assign( ELEMENT_DATA);
  displayedColumns: string[] = ['datafield', 'select'];
  dataSource = new MatTableDataSource<PeriodicElement>(this.data);
  selection = new SelectionModel<PeriodicElement>(true, []);

  constructor(private router: Router) { 
    
  }

  ngOnInit() {
    // this.dataSource._updateChangeSubscription();
    // this.dataSource.data.forEach(row => initial.forEach(data => {
    //   if(data.DataFiled === row.DataFiled)
    //   this.selection.select(row)
    // }));
  }

  backTolistPage(){
    this.router.navigate(['joblist']);
  }

  save(){
    this.router.navigate(['joblist']);
  }
  

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row`;
  }

}
