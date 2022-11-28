import { Component, OnInit, ViewChild } from '@angular/core';

import { circle, latLng, tileLayer } from 'leaflet';
import { SwiperComponent, SwiperDirective } from 'ngx-swiper-wrapper';
import { SwiperOptions } from 'swiper';

import {BestSelling, TopSelling, RecentSelling, statData } from './data';
import { ChartType } from './dashboard.model';

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})

/**
 * Ecommerce Component
 */
export class DashboardComponent implements OnInit {
  // bread crumb items
  breadCrumbItems!: Array<{}>;
  analyticsChart!: ChartType;
  BestSelling: any;
  TopSelling: any;
  RecentSelling: any;
  SalesCategoryChart!: ChartType;
  statData!: any;
  searchInput: string | null = "";
  unitedStatesList: any = [
    {
      id: 1,
      name: "AL",
      fname: "Alabama",
    },
    {
      id: 1,
      name: "AK",
      fname: "Alaska",
    },
    {
      id: 1,
      name: "AS",
      fname: "American Samoa",
    },
    {
      id: 1,
      name: "AZ",
      fname: "Arizona",
    },
    {
      id: 1,
      name: "AR",
      fname: "Arkansas",
    },
    {
      id: 1,
      name: "CA",
      fname: "California",
    },
    {
      id: 1,
      name: "CO",
      fname: "Colorado",
    },
    {
      id: 1,
      name: "CT",
      fname: "Connecticut",
    },
    {
      id: 1,
      name: "DE",
      fname: "Delaware",
    },
    {
      id: 1,
      name: "DC",
      fname: "District Of Columbia",
    },
    {
      id: 1,
      name: "FM",
      fname: "Federated States Of Micronesia",
    },
    {
      id: 1,
      name: "FL",
      fname: "Florida",
    },
    {
      id: 1,
      name: "GA",
      fname: "Georgia",
    },
    {
      id: 1,
      name: "GU",
      fname: "Guam",
    },
    {
      id: 1,
      name: "HI",
      fname: "Hawaii",
    },
    {
      id: 1,
      name: "ID",
      fname: "Idaho",
    },
    {
      id: 1,
      name: "IL",
      fname: "Illinois",
    },
    {
      id: 1,
      name: "IN",
      fname: "Indiana",
    },
    {
      id: 1,
      name: "IA",
      fname: "Iowa",
    },
    {
      id: 1,
      name: "KS",
      fname: "Kansas",
    },
    {
      id: 1,
      name: "KY",
      fname: "Kentucky",
    },
    {
      id: 1,
      name: "LA",
      fname: "Louisiana",
    },
    {
      id: 1,
      name: "ME",
      fname: "Maine",
    },
    {
      id: 1,
      name: "MH",
      fname: "Marshall Islands",
    },
    {
      id: 1,
      name: "MD",
      fname: "Maryland",
    },
    {
      id: 1,
      name: "MA",
      fname: "Massachusetts",
    },
    {
      id: 1,
      name: "MI",
      fname: "Michigan",
    },
    {
      id: 1,
      name: "MN",
      fname: "Minnesota",
    },
    {
      id: 1,
      name: "MS",
      fname: "Mississippi",
    },
    {
      id: 1,
      name: "MO",
      fname: "Missouri",
    },
    {
      id: 1,
      name: "MT",
      fname: "Montana",
    },
    {
      id: 1,
      name: "NE",
      fname: "Nebraska",
    },
    {
      id: 1,
      name: "NV",
      fname: "Nevada",
    },
    {
      id: 1,
      name: "NH",
      fname: "New Hampshire",
    },
    {
      id: 1,
      name: "NJ",
      fname: "New Jersey",
    },
    {
      id: 1,
      name: "NM",
      fname: "New Mexico",
    },
    {
      id: 1,
      name: "NY",
      fname: "New York",
    },
    {
      id: 1,
      name: "NC",
      fname: "North Carolina",
    },
    {
      id: 1,
      name: "ND",
      fname: "North Dakota",
    },
    {
      id: 1,
      name: "MP",
      fname: "Northern Mariana Islands",
    },
    {
      id: 1,
      name: "OH",
      fname: "Ohio",
    },
    {
      id: 1,
      name: "OK",
      fname: "Oklahoma",
    },
    {
      id: 1,
      name: "OR",
      fname: "Oregon",
    },
    {
      id: 1,
      name: "PW",
      fname: "Palau",
    },
    {
      id: 1,
      name: "PA",
      fname: "Pennsylvania",
    },
    {
      id: 1,
      name: "PR",
      fname: "Puerto Rico",
    },
    {
      id: 1,
      name: "RI",
      fname: "Rhode Island",
    },
    {
      id: 1,
      name: "SC",
      fname: "South Carolina",
    },
    {
      id: 1,
      name: "SD",
      fname: "South Dakota",
    },
    {
      id: 1,
      name: "TN",
      fname: "Tennessee",
    },
    {
      id: 1,
      name: "TX",
      fname: "Texas",
    },
    {
      id: 1,
      name: "UT",
      fname: "Utah",
    },
    {
      id: 1,
      name: "VT",
      fname: "Vermont",
    },
    {
      id: 1,
      name: "VI",
      fname: "Virgin Islands",
    },
    {
      id: 1,
      name: "VA",
      fname: "Virginia",
    },
    {
      id: 1,
      name: "WA",
      fname: "Washington",
    },
    {
      id: 1,
      name: "WV",
      fname: "West Virginia",
    },
    {
      id: 1,
      name: "WI",
      fname: "Wisconsin",
    },
    {
      id: 1,
      name: "WY",
      fname: "Wyoming",
    },
  ];
  feeScheduleSummary: any = {
    state:{
      isActive:false,
      isSelected:false
    }
  };
  @ViewChild(SwiperDirective) directiveRef?: SwiperDirective;
  @ViewChild(SwiperComponent, { static: false }) componentRef?: SwiperComponent;

  constructor() {}

  ngOnInit(): void {
    /**
     * BreadCrumb
     */
    this.breadCrumbItems = [
      { label: "Dashboards" },
      { label: "Dashboard", active: true },
    ];

    /**
     * Fetches the data
     */
    this.fetchData();

    // Chart Color Data Get Function
    this._analyticsChart('["--vz-warning", "--vz-primary", "--vz-success"]');
    this._SalesCategoryChart(
      '["--vz-primary", "--vz-success", "--vz-warning", "--vz-danger", "--vz-info"]'
    );
    this.resetStateCards();
  }

  // Chart Colors Set
  private getChartColorsArray(colors: any) {
    colors = JSON.parse(colors);
    return colors.map(function (value: any) {
      var newValue = value.replace(" ", "");
      if (newValue.indexOf(",") === -1) {
        var color = getComputedStyle(document.documentElement).getPropertyValue(
          newValue
        );
        if (color) {
          color = color.replace(" ", "");
          return color;
        } else return newValue;
      } else {
        var val = value.split(",");
        if (val.length == 2) {
          var rgbaColor = getComputedStyle(
            document.documentElement
          ).getPropertyValue(val[0]);
          rgbaColor = "rgba(" + rgbaColor + "," + val[1] + ")";
          return rgbaColor;
        } else {
          return newValue;
        }
      }
    });
  }

  /**
   * Sales Analytics Chart
   */
  private _analyticsChart(colors: any) {
    colors = this.getChartColorsArray(colors);
    this.analyticsChart = {
      chart: {
        height: 370,
        type: "line",
        toolbar: {
          show: false,
        },
      },
      stroke: {
        curve: "straight",
        dashArray: [0, 0, 8],
        width: [2, 0, 2.2],
      },
      colors: colors,
      series: [
        {
          name: "Orders",
          type: "area",
          data: [34, 65, 46, 68, 49, 61, 42, 44, 78, 52, 63, 67],
        },
        {
          name: "Earnings",
          type: "bar",
          data: [
            89.25, 98.58, 68.74, 108.87, 77.54, 84.03, 51.24, 28.57, 92.57,
            42.36, 88.51, 36.57,
          ],
        },
        {
          name: "Refunds",
          type: "line",
          data: [8, 12, 7, 17, 21, 11, 5, 9, 7, 29, 12, 35],
        },
      ],
      fill: {
        opacity: [0.1, 0.9, 1],
      },
      labels: [
        "01/01/2003",
        "02/01/2003",
        "03/01/2003",
        "04/01/2003",
        "05/01/2003",
        "06/01/2003",
        "07/01/2003",
        "08/01/2003",
        "09/01/2003",
        "10/01/2003",
        "11/01/2003",
      ],
      markers: {
        size: [0, 0, 0],
        strokeWidth: 2,
        hover: {
          size: 4,
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
      },
      grid: {
        show: true,
        xaxis: {
          lines: {
            show: true,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
        padding: {
          top: 0,
          right: -2,
          bottom: 15,
          left: 10,
        },
      },
      legend: {
        show: true,
        horizontalAlign: "center",
        offsetX: 0,
        offsetY: -5,
        markers: {
          width: 9,
          height: 9,
          radius: 6,
        },
        itemMargin: {
          horizontal: 10,
          vertical: 0,
        },
      },
      plotOptions: {
        bar: {
          columnWidth: "30%",
          barHeight: "70%",
        },
      },
    };
  }

  /**
   *  Sales Category
   */
  private _SalesCategoryChart(colors: any) {
    colors = this.getChartColorsArray(colors);
    this.SalesCategoryChart = {
      series: [44, 55, 41, 17, 15],
      labels: ["Direct", "Social", "Email", "Other", "Referrals"],
      chart: {
        height: 333,
        type: "donut",
      },
      legend: {
        position: "bottom",
      },
      stroke: {
        show: false,
      },
      dataLabels: {
        dropShadow: {
          enabled: false,
        },
      },
      colors: colors,
    };
  }

  /**
   * Fetches the data
   */
  private fetchData() {
    this.BestSelling = BestSelling;
    this.TopSelling = TopSelling;
    this.RecentSelling = RecentSelling;
    this.statData = statData;
  }

  /**
   * Sale Location Map
   */
  options = {
    layers: [
      tileLayer(
        "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",
        {
          id: "mapbox/light-v9",
          tileSize: 512,
          zoomOffset: -1,
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        }
      ),
    ],
    zoom: 1.1,
    center: latLng(28, 1.5),
  };
  layers = [
    circle([41.9, 12.45], {
      color: "#435fe3",
      opacity: 0.5,
      weight: 10,
      fillColor: "#435fe3",
      fillOpacity: 1,
      radius: 400000,
    }),
    circle([12.05, -61.75], {
      color: "#435fe3",
      opacity: 0.5,
      weight: 10,
      fillColor: "#435fe3",
      fillOpacity: 1,
      radius: 400000,
    }),
    circle([1.3, 103.8], {
      color: "#435fe3",
      opacity: 0.5,
      weight: 10,
      fillColor: "#435fe3",
      fillOpacity: 1,
      radius: 400000,
    }),
  ];

  /**
   * Swiper setting
   */
  public config: SwiperOptions = {
    a11y: { enabled: true },
    direction: "vertical",
    slidesPerView: 2,
    pagination: true,
  };

  /**
   * Recent Activity
   */
  toggleActivity() {
    const recentActivity = document.querySelector(".layout-rightside-col");
    if (recentActivity != null) {
      recentActivity.classList.toggle("d-none");
    }

    if (document.documentElement.clientWidth <= 767) {
      const recentActivity = document.querySelector(".layout-rightside-col");
      if (recentActivity != null) {
        recentActivity.classList.add("d-block");
        recentActivity.classList.remove("d-none");
      }
    }
  }

  /**
   * SidebarHide modal
   * @param content modal content
   */
  SidebarHide() {
    const recentActivity = document.querySelector(".layout-rightside-col");
    if (recentActivity != null) {
      recentActivity.classList.remove("d-block");
    }
  }
  getStateList() {
    if (!this.searchInput || this.searchInput.length < 2) {
      return this.unitedStatesList;
    } else {
      return this.unitedStatesList.filter((item: any) => {
        if (
          item.name.toLowerCase().includes(this.searchInput?.toLowerCase()) ||
          item.fname.toLowerCase().includes(this.searchInput?.toLowerCase())
        ) {
          return true;
        }
        return false;
      });
    }
  }
  searchinputChange($event: any) {
    console.log($event);
  }
  resetStateCards() {
    this.unitedStatesList.forEach((state: any) => {
      state["isSelected"] = false;
    });
  }
  // filterList(list:any,prop:string|null){

  // }
  onStateSelect(stateCard: any) {
    this.resetStateCards();
    stateCard.isSelected = true;
    this.feeScheduleSummary.state = { ...stateCard };
    console.log(this.feeScheduleSummary);
  }
}
