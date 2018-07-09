import { Component,  OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-ccpiechart',
  templateUrl: './ccpiechart.component.html',
  styleUrls: ['./ccpiechart.component.css']
})
export class CcpiechartComponent implements OnInit, OnChanges {

  @Input() public ccInProgress:number;
  @Input() public ccNew:number;
  @Input() public ccOpp:number;
  
 
  ngOnChanges(changes:any){
 this.randomize();
  }

  ngOnInit() {
  }

  // Pie
  public pieChartLabels:string[] = ['New', 'In-Progress'];
  public ccpieChartData:number[] = [0, 0];
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
      this.ccNew,
      this.ccInProgress
      
      ];
    let clone = JSON.parse(JSON.stringify(this.ccpieChartData));
    
    
    clone= data;
   
    this.ccpieChartData = clone;
    

}
}
