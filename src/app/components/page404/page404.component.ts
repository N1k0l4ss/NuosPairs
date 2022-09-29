import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.scss']
})
export class Page404Component implements OnInit {
  get errorMsg(): string {
    return this._errorMsg;
  }
  private _errorMsg = 'Page not found';

  set errorMsg(value: string) {
    this._errorMsg = value;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
