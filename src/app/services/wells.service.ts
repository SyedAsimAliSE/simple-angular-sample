import {Injectable} from '@angular/core';
import {WellModel} from "../components/wells/data/well.model";

@Injectable({
  providedIn: 'root'
})
export class WellsService {

  wellsData: WellModel[] = [
    {wellID: "Well 1", wellName: "Well Name 1"},
    {wellID: "Well 2", wellName: "Well Name 2"},
  ]

  constructor() {
  }

  getWells(): WellModel[] {
    return this.wellsData;
  }

}
