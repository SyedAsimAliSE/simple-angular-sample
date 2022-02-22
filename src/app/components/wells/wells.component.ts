import {Component, OnInit} from '@angular/core';
import {WellModel} from "./data/well.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-wells',
  templateUrl: './wells.component.html',
  styleUrls: ['./wells.component.css']
})
export class WellsComponent implements OnInit {

  wells: WellModel[];

  constructor(private route: ActivatedRoute) {
    this.wells = [];
  }

  ngOnInit(): void {

    this.route.data.subscribe(routeData => {

      const data = routeData['data'];
      if (data) {
        this.wells = data.wells;
      }

    });

  }


}
