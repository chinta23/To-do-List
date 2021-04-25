import { Component, OnInit } from '@angular/core';
import { PaladionService } from '../app.service';

@Component({
  selector: 'app-mdr',
  templateUrl: './mdr.component.html',
  styleUrls: ['./mdr.component.css']
})
export class MdrComponent implements OnInit {

  allMdrs:any;
  constructor(private paladionService: PaladionService) { 
    this.getAllMdrLogs();
  }

  ngOnInit() {
  }

  getAllMdrLogs() {
    this.paladionService.getAllMdrLogs().subscribe(data => {
      this.allMdrs = data.data;
      console.log(this.allMdrs);
    })
  }

}
