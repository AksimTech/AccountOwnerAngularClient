import { Component, OnInit, Input } from '@angular/core';
import { Account } from '../../../_interfaces/account';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {
  @Input() public accountsList: Account[];

  constructor() { }

  ngOnInit() {
  }

}
