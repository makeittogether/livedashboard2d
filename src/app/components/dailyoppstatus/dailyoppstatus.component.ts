import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-dailyoppstatus',
  templateUrl: './dailyoppstatus.component.html',
  styleUrls: ['./dailyoppstatus.component.css']
})
export class DailyoppstatusComponent implements OnInit, OnChanges {

  @Input() public dailyInProgress:number;
  @Input() public dailyNew:number;
  @Input() public dailyTotal:number;
  @Input() public dailyClosed:number;
  
 
  ngOnChanges(changes:any){
 this.randomize();
  }

  ngOnInit() {
  }

  
  // Pie
  public pieChartLabels:string[] = ['New', 'In-Progress', 'Closed'];
  public dailyChartData:number[] = [0, 0, 0];
  public pieChartType:string = 'pie';

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  public randomize():void {
    

    let data = [
      this.dailyNew,
      this.dailyInProgress,
      this.dailyClosed
      ];
    let clone = JSON.parse(JSON.stringify(this.dailyChartData));
    
    
    clone= data;
   
    this.dailyChartData = clone;
    

}

}
