import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-display-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './display-data.component.html',
  styleUrl: './display-data.component.css'
})
export class DisplayDataComponent implements OnInit{
  httpClient = inject(HttpClient);
  data:any[] = [];
  
  ngOnInit(): void {
      this.fetchData();
  }
  fetchData(){
    this.httpClient.get('http://dsc.com/API/test.php').
    subscribe((data:any) => {
      console.log(data.list);
      this.data = data.list;
    });
  }
}
