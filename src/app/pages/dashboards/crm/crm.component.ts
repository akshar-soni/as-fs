import { Component, OnInit } from '@angular/core';

import {statData, DealsStatus, UpcomingActivities, ClosingDeals } from './data';

@Component({
  selector: 'app-crm',
  templateUrl: './crm.component.html',
  styleUrls: ['./crm.component.scss']
})

/**
 * Crm Dashboard Component
 */
export class CrmComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  statData!: any;
  salesForecastChart: any;
  DealTypeChart: any;
  splineAreaChart: any;
  DealsStatus: any;
  UpcomingActivities: any;
  ClosingDeals: any;

  constructor() { }

  ngOnInit(): void {
    /**
     * BreadCrumb
     */
    this.breadCrumbItems = [
      { label: 'Dashboards' },
      { label: 'CRM', active: true }
    ];

    /**
     * Fetches the data
     */
    this.fetchData();

     // Chart Color Data Get Function
     this._salesForecastChart('["--vz-primary", "--vz-success", "--vz-danger"]');
     this._DealTypeChart('["--vz-warning", "--vz-secondary", "--vz-success"]');
     this._splineAreaChart('["--vz-success", "--vz-danger"]');
  }

   // Chart Colors Set
   private getChartColorsArray(colors:any) {
    colors = JSON.parse(colors);
    return colors.map(function (value:any) {
      var newValue = value.replace(" ", "");
      if (newValue.indexOf(",") === -1) {
        var color = getComputedStyle(document.documentElement).getPropertyValue(newValue);
            if (color) {
            color = color.replace(" ", "");
            return color;
            }
            else return newValue;;
        } else {
            var val = value.split(',');
            if (val.length == 2) {
                var rgbaColor = getComputedStyle(document.documentElement).getPropertyValue(val[0]);
                rgbaColor = "rgba(" + rgbaColor + "," + val[1] + ")";
                return rgbaColor;
            } else {
                return newValue;
            }
        }
    });
  }

  /**
 * Sales Forecast Charts
 */
  private _salesForecastChart(colors:any) {
    colors = this.getChartColorsArray(colors);
    this.salesForecastChart = {
      series: [{
        name: 'Goal',
        data: [37]
      }, {
          name: 'Pending Forcast',
          data: [12]
      }, {
          name: 'Revenue',
          data: [18]
      }],
      chart: {
        type: 'bar',
        height: 341,
        toolbar: {
            show: false,
        },
      },
      plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '65%',
          },
      },
      stroke: {
          show: true,
          width: 5,
          colors: ['transparent']
      },
      xaxis: {
        categories: [''],
        axisTicks: {
            show: false,
            borderType: 'solid',
            color: '#78909C',
            height: 6,
            offsetX: 0,
            offsetY: 0
        },
        title: {
            text: 'Total Forecasted Value',
            offsetX: 0,
            offsetY: -30,
            style: {
                color: '#78909C',
                fontSize: '12px',
                fontWeight: 400,
            },
        },
      },
      yaxis: {
        labels: {
            formatter: function (value:any) {
                return "$" + value + "k";
            }
        },
        tickAmount: 4,
        min: 0
      },
      fill: {
          opacity: 1
      },
      legend: {
          show: true,
          position: 'bottom',
          horizontalAlign: 'center',
          fontWeight: 500,
          offsetX: 0,
          offsetY: -14,
          itemMargin: {
              horizontal: 8,
              vertical: 0
          },
          markers: {
              width: 10,
              height: 10,
          }
      },
      colors: colors
    };
  }

  /**
 * Deal Type Chart
 */
   private _DealTypeChart(colors:any) {
    colors = this.getChartColorsArray(colors);
    this.DealTypeChart = {
      series: [{
          name: 'Series 1',
          data: [80, 50, 30, 40, 100, 20],
      },
      {
          name: 'Series 2',
          data: [20, 30, 40, 80, 20, 80],
      },
      {
          name: 'Series 3',
          data: [44, 76, 78, 13, 43, 10],
      }
      ],
      chart: {
          height: 350,
          type: 'radar',
          dropShadow: {
              enabled: true, blur: 1, left: 1, top: 1
          },
          toolbar: {
              show: false
          },
      },
      stroke: {
          width: 2
      },
      fill: {
          opacity: 0.2
      },
      markers: {
          size: 0
      },
      colors: colors,
      xaxis: {
          categories: ['2014', '2015', '2016', '2017', '2018', '2019']
      }
    };
  }

  /**
 * Splie-Area Chart
 */
  private _splineAreaChart(colors:any) {
    colors = this.getChartColorsArray(colors);
    this.splineAreaChart = {
      series: [{
          name: 'Revenue',
          data: [20, 25, 30, 35, 40, 55, 70, 110, 150, 180, 210, 250]
      },{
          name: 'Expenses',
          data: [12, 17, 45, 42, 24, 35, 42, 75, 102, 108, 156, 199]
      }],
      chart: {
          height: 290,
          type: 'area',
          toolbar: 'false',
      },
      dataLabels: {
          enabled: false
      },
      stroke: {
          curve: 'smooth',
          width: 2,
      },
      xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      yaxis: {
          tickAmount: 5,
          min: 0,
          max: 260
      },
      colors: colors,
      fill: {
          opacity: 0.06,
          type: 'solid'
      }
    };
  }


  /**
   * Fetches the data
   */
   private fetchData() {
    this.statData = statData;
    this.DealsStatus = DealsStatus;
    this.UpcomingActivities = UpcomingActivities;
    this.ClosingDeals = ClosingDeals;
  }

}