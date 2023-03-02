import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-json-data',
  templateUrl: './json-data.component.html',
  styleUrls: ['./json-data.component.css']
})
export class JsonDataComponent implements OnInit {
  jsonData: any[];

  constructor(private http: HttpClient) {
    this.jsonData = [];
   }

  ngOnInit() {
    this.http.get<any[]>('assets/tool-usage.json').subscribe(data => {
      console.log(data);
      this.jsonData = data;
    });
  }
}
