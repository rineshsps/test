import { OnInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { JobService } from 'src/app/services/job.service';

export interface JobList {
  jobname: string;
  frequency: string;
  time: string;
  timezone: string;
  scheduled: boolean;
}


@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit  {
  displayedColumns: string[] = ['jobname', 'frequency', 'time', 'scheduled', 'actions'];
  dataSource : any;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private router: Router, private jobListService: JobService) {}

  ngOnInit() {
    this.jobListService.getJobList().subscribe(data => {
      this.dataSource = new MatTableDataSource<any>(data);
      this.dataSource.paginator = this.paginator;
    })
  }

  createJob(){
    this.router.navigate(['createjob']);
  }
}
