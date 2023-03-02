import { Component,OnInit } from '@angular/core';
import { ToolUsageService } from '../tool-usage.service';
import { ToolUsage } from '../tool-usage.model';
import { ToolUsageComponent } from '../tool-usage/tool-usage.component';
import { DiagramComponent } from '../diagram/diagram.component';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-dashboard',
  template: `
    <h1>Tool Usage Dashboard</h1>
    <app-tool-usage [toolUsageData]="toolUsage"></app-tool-usage>
    <!-- <app-diagram [toolUsageData]="toolUsage"></app-diagram> -->
  `
})
export class DashboardComponent {
  toolUsage: ToolUsage[];

  constructor(private toolUsageService: ToolUsageService) { 
    this.toolUsage = [];
  }

   ngOnInit() {
     this.toolUsageService.getToolUsage().subscribe(data => {
       this.toolUsage = data;
      //  console.log(this.toolUsage);
     });
   }

  
}
