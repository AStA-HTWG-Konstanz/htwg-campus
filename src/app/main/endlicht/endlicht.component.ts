import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { ActionButtonComponent } from '~/app/action-button/action-button.component';
@Component({
  selector: 'ns-endlicht',
  templateUrl: './endlicht.component.html',
  styleUrls: ['./endlicht.component.css']
})
export class EndlichtComponent implements OnInit {
  @ViewChild("actionButton", { static: false })
  _buttonRef: ActionButtonComponent;


  constructor(private routerExtensions: RouterExtensions) { }

  ngOnInit() {
  }

  navigateBack() {
    this.routerExtensions.navigateByUrl("main", { transition: { name: 'slideRight' }, clearHistory: true });
  }

}
