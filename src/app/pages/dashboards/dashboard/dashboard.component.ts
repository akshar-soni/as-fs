import { Component, OnInit, ViewChild } from '@angular/core';

import { circle, latLng, tileLayer } from "leaflet";

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
  fixedFSSelections:string[]=["State","Foreclosure Type","Loan Type","Investor Type","Client","Mlestone"];
  feeScheduleProgressIndex : number = 0;
  constructor() {}

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Dashboards" },
      { label: "Dashboard", active: true },
    ];
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
  onStateSelect(stateCard: any) {
    this.resetStateCards();
    stateCard.isSelected = true;
    this.feeScheduleSummary.state = { ...stateCard };
    console.log(this.feeScheduleSummary);
  }
  onProgressNext(){
    this.feeScheduleProgressIndex += 1;
  }
  onProgressBack(){
    this.feeScheduleProgressIndex += 1;
  }
}
