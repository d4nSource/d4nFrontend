import { Component, OnInit, Injectable }  from '@angular/core';
import { StartpageService }   from './shared/startpage.service';
import {Startpage} from './startpage';

@Component({
  templateUrl:  'startpage.component.html',
  styleUrls:    ['startpage.component.scss'],
  providers: [StartpageService]
})

@Injectable()
export class StartpageComponent implements OnInit {

 startpages: Startpage[] = [];

 constructor(private _startpageService: StartpageService) { }

  ngOnInit() {
    this._startpageService.getStartpage()
      .subscribe(
        startpages => {
          this.startpages = startpages;
        }
      );
  }

}
