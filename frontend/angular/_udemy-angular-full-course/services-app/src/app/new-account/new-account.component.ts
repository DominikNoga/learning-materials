import { Component, EventEmitter, Output } from '@angular/core';
import { AccountsService } from '../services/accounts.service';
import { Account, AvailableAccountStatus, AvailableStatusses } from '../models/account.model';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {
  readonly ACCOUNT_AVAILABLE_STATUSSES = AvailableStatusses;

  constructor(private accountsService: AccountsService) { }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addNewAccount(accountName, <AvailableAccountStatus>accountStatus)
    this.accountsService.newAccountAdded.emit();
    console.log('A server status changed, new status: ' + accountStatus);
  }
}
