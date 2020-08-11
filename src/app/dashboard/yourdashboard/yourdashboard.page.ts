import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Chart } from 'chart.js';
import { chartjsGauge } from 'chartjs-gauge';
import { DashboardService } from '../dashboard.service';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-yourdashboard',
  templateUrl: './yourdashboard.page.html',
  styleUrls: ['./yourdashboard.page.scss'],
})
export class YourdashboardPage implements OnInit, AfterViewInit {
  @ViewChild('barCanvas', {static: false}) barCanvas: ElementRef;
  @ViewChild('barCanvasLineGroup', {static: false}) barCanvasLineGroup: ElementRef;
  @ViewChild('gaugaChart', {static: false}) gaugaChart: ElementRef;
  barChart: Chart;
  bars: any;
  title: string;
  productionTotal: string;
  rank: number;
  collections: any[];
  renews: any[];


  private labelsYear: string[] = ['jan', 'feb', 'mar', 'Apr', 'may','jun','Jul','aug', 'sept', 'Oct', 'nov', 'dec'];

  loadingDashboardInfo;
  constructor(
    private translateService: TranslateService,
    private dashboardService: DashboardService,
    private storage: Storage
  ) { }

  async ngOnInit() {
      this.translateService.get('dashboard').subscribe(async (text) => {
        this.title =  await text.title;
      });

      await this.dashboardService._dashboardSubLoad.subscribe(async (data) => {
        // this.loadingDashboardInfo = await data;
        this.productionTotal = await this.formatMoney(data['production'].total);
        this.collections = await Object.values(data['collections']);
        this.renews = await Object.values(data['renews']);
       
        this.rank = await data['rank'] + 1;
      });
      await this.dashboardService.get_dashboard_info();
      this.dashboardService.get_collection_info();
  }

  formatMoney(amount, decimalCount = 2, decimal = ".", thousands = ",") {
    try {
      decimalCount = Math.abs(decimalCount);
      decimalCount = isNaN(decimalCount) ? 2 : decimalCount;
  
      const negativeSign = amount < 0 ? "-" : "";
  
      let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
      let j = (i.length > 3) ? i.length % 3 : 0;
  
      return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - Number(i)).toFixed(decimalCount).slice(2) : "");
    } catch (e) {
      console.log(e)
    }
  }

  abbreviateNumber(value) {
    let newValue = value;
    if (value >= 1000) {
        let suffixes = ["", "k", "m", "b","t"];
        let suffixNum = Math.floor( (""+value).length/3 );
        let shortValue;
        for (let precision = 2; precision >= 1; precision--) {
            shortValue = parseFloat( (suffixNum != 0 ? (value / Math.pow(1000,suffixNum) ) : value).toPrecision(precision));
            var dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g,'');
            if (dotLessShortValue.length <= 2) { break; }
        }
        if (shortValue % 1 != 0)  shortValue = shortValue.toFixed(1);
        newValue = shortValue+suffixes[suffixNum];
    }
    return newValue;
  }


  async ionViewDidEnter() {
    await this.dashboardService._dashboardSubLoad.subscribe(async (data) => {
      this.loadingDashboardInfo = await data;
      this.loadingDashboardInfo.lastVsCurrentYear.current_year.map(el => {

      });
      this.createBarChart();
      // this.createBarChart3();
      this.createBarChart4();
     
    });

    await this.dashboardService.get_dashboard_info();
  }

  createBarChart2() {
    this.bars = new Chart(this.barCanvas.nativeElement, {
      type: "bar",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)"
            ],
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)"
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  }

  createBarChart() {
    this.bars = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: this.labelsYear,
        datasets: [{
          label: 'السنه الحالية',
          data: this.loadingDashboardInfo.lastVsCurrentYear.current_year,
          backgroundColor: '#3778C2', // array should have same number of elements as number of dataset
          borderColor: '#3778C2',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: 'السنه السابقة',
          data: this.loadingDashboardInfo.lastVsCurrentYear.last_year,
          backgroundColor: '#3EB650', // array should have same number of elements as number of dataset
          borderColor: '#3EB650',// array should have same number of elements as number of dataset
          borderWidth: 1
        }
      
      ]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }



  createBarChart4() {
    this.bars = new Chart(this.barCanvasLineGroup.nativeElement, {
      type: 'line',
      data: {
        labels: this.labelsYear,
        datasets: [{
          label: 'الانتاجية',
          data: this.loadingDashboardInfo.targetVsProduction.production,
          backgroundColor: 'rgba(55, 120, 194, 0)', // array should have same number of elements as number of dataset
          borderColor: 'rgba(55, 120, 194)',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: ' تم تحقيقه ',
          data: this.loadingDashboardInfo.targetVsProduction.target,
          backgroundColor: 'rgb(62, 182, 80, 0)', // array should have same number of elements as number of dataset
          borderColor: 'rgb(62, 182, 80)',// array should have same number of elements as number of dataset
          borderWidth: 1
        }
      ]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }],
          xAxes:{
            stacked: true
          } 
        }
      }
    });
  }
  createGaugeChart() {
    this.bars = new Chart(this.gaugaChart.nativeElement, {
      type: 'gauge',
      data: {
        datasets: [{
          value: 0.5,
          data: [1, 2, 3, 4],
          backgroundColor: ['green', 'yellow', 'orange', 'red'],
        }]
      },
      options: {
        needle: {
          radiusPercentage: 2,
          widthPercentage: 3.2,
          lengthPercentage: 80,
          color: 'rgba(0, 0, 0, 1)'
        },
        valueLabel: {
          display: true,
          formatter: (value) => {
            return '$' + Math.round(value);
          },
          color: 'rgba(255, 255, 255, 1)',
          backgroundColor: 'rgba(0, 0, 0, 1)',
          borderRadius: 5,
          padding: {
            top: 10,
            bottom: 10
          }
        }
      }
    });
  }

  ngAfterViewInit(): void {
  
  }

  onClick(ids: number[]) {
    this.dashboardService.fetchPolicies(ids);
  }
  onClickRenwals(ids: number[]) {
    this.dashboardService.fetchRenewals(ids);
  }

}
