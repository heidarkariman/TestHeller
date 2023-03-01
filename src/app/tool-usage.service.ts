import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToolUsage } from './tool-usage.model.ts';

@Injectable({
  providedIn: 'root'
})
export class ToolUsageService {
  private toolUsageUrl = 'assets/tool-usage.json';

  constructor(private http: HttpClient) { }

  getToolUsage(): Observable<ToolUsage[]> {
    return this.http.get<ToolUsage[]>(this.toolUsageUrl);
  }
}
