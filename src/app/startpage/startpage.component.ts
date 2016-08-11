import { Component, OnInit, Inject }  from '@angular/core';
import { StartpageService }   from './shared/startpage.service'
import { Startpage }          from './startpage';

@Component({
  templateUrl:  'startpage.component.html',
  styleUrls:    ['startpage.component.scss'],
  providers: [StartpageService]
})

export class StartpageComponent implements OnInit {

  constructor(private _startpageService: StartpageService) { }
  
  startpages: Startpage[];

  ngOnInit() {
    this._startpageService.getStartpage()
      .subscribe(
        startpages => {
          this.startpages = startpages;
          this._startpageService = startpages;
        }
      );
  }

}
