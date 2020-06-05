import { Component, OnInit } from '@angular/core';
import { StaticDataService } from '../static-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public chartOptions = {
    responsive: true,
    legend: {
      position: 'bottom'
    }
  };
  public chartData = [];
  public chartLabels = [];
  public chartLegend = true;
  public chartType = 'pie';
  locationMap = new Map<string, number>();

  constructor(private staticDataService: StaticDataService) { 
      this.staticDataService.users.forEach(user => {
        var counter = this.locationMap.get(user.location) ? this.locationMap.get(user.location)+1 : 1;
        this.locationMap.set(user.location, counter);
      });

      Array.from(this.locationMap.entries()).forEach(entry => {
        this.chartLabels.push(entry[0]);
        this.chartData.push(entry[1]);
      })
  }

  ngOnInit() {
  }

}
