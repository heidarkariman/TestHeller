import { Component, Input, ViewChild, AfterViewInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-tool-usage',
  templateUrl: './tool-usage.component.html',
  styleUrls: ['./tool-usage.component.css']
})
export class ToolUsageComponent implements AfterViewInit {
  constructor() {
    this.toolUsageData = [];
    this.dataSource = new MatTableDataSource();
    this.sort = new MatSort;
  }

  @Input() toolUsageData: any[];
  displayedColumns: string[] = ['tool_id', 'count', 'time', 'first', 'last', 'cposmin', 'cposmax', 'uposmin', 'uposmax'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource(this.toolUsageData);
    this.dataSource.sort = this.sort;
  }

  
}
