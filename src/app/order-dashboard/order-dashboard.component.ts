import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-dashboard',
  templateUrl: './order-dashboard.component.html',
  styleUrls: ['./order-dashboard.component.css']
})
export class OrderDashboardComponent implements OnInit {
interval:any;

  constructor() { }

  ngOnInit(): void {
  }

  dayStart(){
    this.interval = setInterval(()=>{


    }, 2000)

  }

  dayEnd(){
   clearInterval(this.interval)
  }

}
