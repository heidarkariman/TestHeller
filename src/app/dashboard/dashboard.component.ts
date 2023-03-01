import { Component } from '@angular/core';
import { ToolUsageService } from '../tool-usage.service';
import { ToolUsage } from '../tool-usage.model';
import { ToolUsageComponent } from '../tool-usage/tool-usage.component';
import { DiagramComponent } from '../diagram/diagram.component';


@Component({
  selector: 'app-dashboard',
  template: `
    <h1>Tool Usage Dashboard</h1>
    <app-tool-usage [toolUsage]="toolUsage"></app-tool-usage>
    <app-diagram [toolUsage]="toolUsage"></app-diagram>
  `
})
export class DashboardComponent {
  toolUsage: ToolUsage[];

  constructor(private toolUsageService: ToolUsageService) { }

  ngOnInit() {
    this.toolUsageService.getToolUsage().subscribe(data => {
      this.toolUsage = data;
    });
  }
}
