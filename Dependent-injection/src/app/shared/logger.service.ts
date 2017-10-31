import {Injectable} from "@angular/core";

@Injectable()
export class LoggerService {

  constructor() { }

  log(message:string) {
    console.log(message);
  }

}
