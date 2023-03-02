import { Component, Input, ViewChild, AfterViewInit, OnChanges } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import { ToolUsage } from '../tool-usage.model';

@Component({
  selector: 'app-tool-usage',
  templateUrl: './tool-usage.component.html',
  styleUrls: ['./tool-usage.component.css']
})
export class ToolUsageComponent implements OnChanges {
  constructor() {
    this.dataSource = new MatTableDataSource();
    this.sort = new MatSort;
    this._toolUsageData=[];
  }

  private _toolUsageData: ToolUsage[];
  @Input() set toolUsageData(value: ToolUsage[]) {
    this._toolUsageData = value;
    this.dataSource.data = this._toolUsageData;
    this.dataSource.sort = this.sort;
  }  displayedColumns: string[] = ['tool_id', 'count', 'time', 'first', 'last', 'cposmin', 'cposmax', 'uposmin', 'uposmax'];
  dataSource: MatTableDataSource<ToolUsage>;

  @ViewChild(MatSort) sort: MatSort;

  ngOnChanges() {
    this.dataSource = new MatTableDataSource(this.toolUsageData);
    this.dataSource.sort = this.sort;
    console.log(this.toolUsageData);
  }

  
}
