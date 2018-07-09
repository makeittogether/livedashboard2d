import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-opp-ver-bar-overall',
  templateUrl: './opp-ver-bar-overall.component.html',
  styleUrls: ['./opp-ver-bar-overall.component.css']
})
export class OppVerBarOverallComponent implements OnInit , OnChanges{

//  public totalOpp:number;
 @Input('olsOpp') public olsOpp:number;
 @Input('ccOpp') public  ccOpp:number;

 @Input('totalOpp') public  totalOpp: number;

 ngOnChanges(changes:any){
this.randomize();
 }
ngOnInit(){
  
  }

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true,
    tooltips: { enabled: false } 
  };

  public barChartLabels:string[] = ['OLS                           Call Center'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = false;
 
  public barChartData:any[] = [
    {data: [65], label:[ 'OLS']},
    {data: [28], label: 'Call Center'}
   
  ];

  public barChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(255,0,0,1)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    }
  ];
 
  // // events
  // public chartClicked(e:any):void {
  //   console.log(e);
  // }
 
  // public chartHovered(e:any):void {
  //   console.log(e);
  // }
 
  public randomize():void {
    
    let data = [
      this.olsOpp,
      this.ccOpp
      ];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    // clone[1].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }
}


