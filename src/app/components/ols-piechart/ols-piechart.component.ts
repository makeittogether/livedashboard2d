import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-ols-piechart',
  templateUrl: './ols-piechart.component.html',
  styleUrls: ['./ols-piechart.component.css']
})
export class OlsPiechartComponent implements OnInit, OnChanges {

  @Input() public olsInProgress:number;
  @Input() public olsNew:number;
  @Input() public olsOpp:number;
  // @Input('ccOpp') public  ccOpp:number;
 
  // @Input('totalOpp') public  totalOpp: number;
 
  ngOnChanges(changes:any){
 this.randomize();
  }

  ngOnInit() {
  }

  // Pie
  public pieChartLabels:string[] = ['New', 'In-Progress'];
  public olspieChartData:number[] = [300, 500];
  public pieChartType:string = 'doughnut';

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  public randomize():void {
    

    let data = [
      this.olsNew,
      this.olsInProgress
     
      ];
    let clone = JSON.parse(JSON.stringify(this.olspieChartData));
    
    
    clone= data;
   
    this.olspieChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }

}
