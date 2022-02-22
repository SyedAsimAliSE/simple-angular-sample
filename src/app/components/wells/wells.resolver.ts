import {Resolve} from "@angular/router";
import {Injectable} from "@angular/core";
import {WellsService} from "../../services/wells.service";

@Injectable()
export class WellsResolver implements Resolve<any> {

  constructor(private wellService: WellsService) {
  }

  resolve() {
    return new Promise((resolve, reject) => {

      return resolve({
        wells: this.wellService.getWells(),
      });

    });
  }
}
