import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountsService } from '../services/accounts.service';
import { Account, AvailableAccountStatus } from '../models/account.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account!: Account;

  constructor(private accountsService: AccountsService) { }

  onSetTo(status: AvailableAccountStatus) {
    this.accountsService.updateAccountStatus(this.account.accountNumber, status);
    console.log('A server status changed, new status: ' + status);
    this.accountsService.accountStatusChanged.emit();
  }
}
