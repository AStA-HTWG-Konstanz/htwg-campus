import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { ActionButtonComponent } from '~/app/action-button/action-button.component';
import { PrintBalanceService } from '~/app/service/balance/print-balance.service';
import { HttpResponse } from 'tns-core-modules/http/http';
import { Balance } from '~/app/model/balance/balance';

@Component({
  selector: 'ns-print-balance',
  templateUrl: './print-balance.component.html',
  styleUrls: ['./print-balance.component.css']
})
export class PrintBalanceComponent implements OnInit {
  @ViewChild("actionButton", { static: false })
  _buttonRef: ActionButtonComponent;
  private balance: Balance;

  constructor(private routerExtensions: RouterExtensions, private balanceService: PrintBalanceService) {
    balanceService.getBalance().then(
      (response: Balance) => {
        this.balance = response;
      },
      (error) => console.log("balance error: " + JSON.stringify(error))
    )
  }

  ngOnInit() {

  }
  navigateBack() {
    this.routerExtensions.navigateByUrl("main", { transition: { name: 'slideRight' }, clearHistory: true });
  }
  getBalance(): string {
    if (this.balance) {
      return this.balance.print
    } else {
      return "None"
    }
  }

}
