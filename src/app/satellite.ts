export class Satellite {
  name: string;
  type: string;
  launchDate: string;
  orbitType: string;
  operational: boolean;
  constructor(
    name: string,
    type: string,
    launchDate: string,
    orbitType: string,
    operational: boolean
  ) {
    this.name = name;
    this.type = type;
    this.launchDate = launchDate;
    this.orbitType = orbitType;
    this.operational = operational;
  }
  //method for determining if type is space debris
  shouldShowWarning(): boolean {
    //conditional comparing case insensitive type to space debris
    if (this.type.toLowerCase() === "space debris") {
      //returns boolean value
      return true;
    } else {
      return false;
    }
  }
}
