import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { ActionButtonComponent } from '~/app/action-button/action-button.component';
import { StrandbarService } from '~/app/service/strandbar/strandbar.service';
@Component({
  selector: 'ns-strandbar',
  templateUrl: './strandbar.component.html',
  styleUrls: ['./strandbar.component.css']
})
export class StrandbarComponent implements OnInit {
  @ViewChild("actionButton", { static: false })
  _buttonRef: ActionButtonComponent;

  isOpen: boolean = false;


  constructor(private routerExtensions: RouterExtensions, private strandbarService: StrandbarService) { }

  ngOnInit() {
    this.strandbarService.getIsOpen().then(
      (resolve: boolean) => {
        this.isOpen = resolve
      },
      (reject: any) => {
        console.log("error strandbar response with: " + JSON.stringify(reject))
        this.isOpen = true;
      }
    )
  }
  navigateBack() {
    this.routerExtensions.navigateByUrl("main", { transition: { name: 'slideRight' }, clearHistory: true });
  }

}
