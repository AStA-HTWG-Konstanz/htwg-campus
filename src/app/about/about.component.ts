import { Component, OnInit, ViewChild } from '@angular/core';
import { ActionButtonComponent } from '../action-button/action-button.component';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'ns-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @ViewChild("actionButton", { static: false })
  _buttonRef: ActionButtonComponent;

  developer: { name: string, departmend: string }[] = [
    { name: "Alexander Baer", departmend: "WIN" },
    { name: "Marc Bormeth", departmend: "AIN" },
    { name: "Manuel Haug", departmend: "AIN" },
    { name: "Leonie Kahn", departmend: "WIN" },
    { name: "Roman Leinweber", departmend: "WIN" },
    { name: "Patrick Sterk", departmend: "AIN" },
    { name: "Stefan Schmunk", departmend: "AIN" },
    { name: "David Wolpers", departmend: "AIN" },
    { name: "Matthias Asche", departmend: "AIN" },
    { name: "Sebastian Reinbold", departmend: "AIN" }
  ];

  designer: { name: string, departmend: string }[] = [
    { name: "Mirijam Fries", departmend: "BKD" },
    { name: "Anne Kaiser", departmend: "BKD" },
    { name: "Sarah Prestel", departmend: "BKD" },
    { name: "Laura Sladkowski", departmend: "BKD" }
  ];

  supervisor: { name: string, departmend: string }[] = [{ name: "Prof. Dr. Marko Boger", departmend: "IN" }];

  constructor(private routerExtensions: RouterExtensions) { }

  ngOnInit() {
  }
  navigateBack() {
    this.routerExtensions.navigateByUrl("main", { transition: { name: 'slideRight' }, clearHistory: true })
  }

}
