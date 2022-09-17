import { Component, HostListener, Input, OnInit } from '@angular/core';
import { D3Service } from "../services/d3.service";

@Component({
  selector: 'app-body-layout',
  templateUrl: './body-layout.component.html',
  styleUrls: ['./body-layout.component.scss']
})
export class BodyLayoutComponent implements OnInit {
  @Input() collapsed = false;
  @Input() screenWidth = 0;
  TotTastks: number = 45;
  NoOfDelay: number = 8;
  NoOfTrack: number = 14;
  NoOfSDelay: number = 4;
  NoOfCompleted: number = 19;
  viewLogo: any = 0;
  chartData!: Array<any>;
  beinexTask: any;
  auraaTask:any;
  stackedOptions: any;
  doughnutData: any = [
    { percentage: "40%", value: "20", color: "#064842", width: '0px' },
    { percentage: "20%", value: "60", color: "#2c8f85", width: '20px' },
  ];
  lineData:any;

  constructor() { }

  ngOnInit(): void {
    this.beinexTask = {
      labels: ['Strategic Affairs', 'Healthcare Sector', 'Healthcare Facilities', 'Support Services'],
      datasets: [{
        type: 'bar',
        label: 'On Track',
        backgroundColor: '#06a736',
        data: [4, 3, 3, 5]
      }, {
        type: 'bar',
        label: 'Delayed',
        backgroundColor: '#fdba04',
        data: [3, 2, 5, 3]
      }, {
        type: 'bar',
        label: 'Significantly Delayed',
        backgroundColor: '#ed687c',
        data: [5, 3, 2, 2]
      }, {
        type: 'bar',
        label: 'Completed',
        backgroundColor: '#2c8f85',
        data: [2,3, 1, 2]
      }
      ]
    };
    this.auraaTask = {
      labels: ['Dr Omar Najim', 'Sharon Reily', 'Salem Abdulkareem', 'Amna Alhameli'],
      datasets: [{
        type: 'bar',
        label: 'On Track',
        backgroundColor: '#06a736',
        data: [4, 3, 3, 2]
      }, {
        type: 'bar',
        label: 'Delayed',
        backgroundColor: '#fdba04',
        data: [3, 2, 4, 3]
      }, {
        type: 'bar',
        label: 'Significantly Delayed',
        backgroundColor: '#ed687c',
        data: [3, 5, 2, 1]
      }, {
        type: 'bar',
        label: 'Completed',
        backgroundColor: '#2c8f85',
        data: [5, 3, 2, 2]
      }
      ]
    };
    this.lineData = {
      labels: ['Dr Omar Najim', 'Sharon Reily', 'Salem Abdulkareem', 'Amna Alhameli'],
      datasets: [{
        type: 'line',
        label: 'On Track',
        backgroundColor: '#06a736',
        data: [4, 3, 3, 2]
      }, {
        type: 'line',
        label: 'Delayed',
        backgroundColor: '#fdba04',
        data: [3, 2, 4, 3]
      }, {
        type: 'line',
        label: 'Significantly Delayed',
        backgroundColor: '#ed687c',
        data: [3, 5, 2, 1]
      }, {
        type: 'line',
        label: 'Completed',
        backgroundColor: '#2c8f85',
        data: [5, 3, 2, 2]
      }
      ]
    };


    this.stackedOptions = {
      indexAxis: 'y',
      plugins: {
        tooltips: {
          mode: 'index',
          intersect: false
        },
            legend: {
                display: true,
                position: 'top' 
            }
      },
      scales: {
        x: {
          stacked: true,
          ticks: {
            color: '#495057'
          },
          grid: {
            color: '#ebedef'
          }
        },
        y: {
          stacked: true,
          ticks: {
            color: '#495057'
          },
          grid: {
            color: '#ebedef'
          }
        }
      }
    };

  }
}
