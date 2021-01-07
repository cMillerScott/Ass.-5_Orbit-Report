import { Component, OnInit, Input } from "@angular/core";
import { Satellite } from "../satellite";

@Component({
  selector: "app-orbit-counts",
  templateUrl: "./orbit-counts.component.html",
  styleUrls: ["./orbit-counts.component.css"],
})
export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[];

  constructor() {}

  //typeCounter function takes in a type and returns a number
  typeCounter(type: string) {
    //empty array
    let typeArray: Satellite[] = [];
    //case insensitivity
    type = type.toLowerCase();
    //loops over array of Satellite objects
    for (let i = 0; i < this.satellites.length; i++) {
      //conditional that compares type of Satellite to function parameter
      if (this.satellites[i].type.toLowerCase() === type) {
        //pushes matching Satellites to typeArray
        typeArray.push(this.satellites[i]);
      }
    }
    //returns number of items in typeArray
    return typeArray.length;
  }

  ngOnInit() {}
}
