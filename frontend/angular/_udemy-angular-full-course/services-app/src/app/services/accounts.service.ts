import { EventEmitter, Injectable } from '@angular/core';
import { Account, AvailableAccountStatus, AvailableStatusses } from '../models/account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  private accounts: Account[] = [
    {
      accountNumber: 1,
      name: 'Master Account',
      status: AvailableStatusses.active
    },
    {
      accountNumber: 2,
      name: 'Testaccount',
      status: AvailableStatusses.inactive
    },
    {
      accountNumber: 3,
      name: 'Hidden Account',
      status: AvailableStatusses.unknown
    }
  ];

  public readonly newAccountAdded = new EventEmitter<void>();
  public readonly accountStatusChanged = new EventEmitter<void>();

  getAccounts = () => this.accounts;

  getOneAccount = (accountNumber: number): Account | string => {
    const account: Account | undefined = this.accounts.find(account => account.accountNumber === accountNumber);
    return account ? account : `No account with numner: ${accountNumber}`;
  };

  addNewAccount = (accountName: string, accountStatus: AvailableAccountStatus) => {
    this.accounts = [...this.accounts, {
      accountNumber: (this.accounts.length + 1),
      name: accountName,
      status: accountStatus 
    }];
  }

  updateAccountStatus = (accountNumber: number, status: AvailableAccountStatus) => {
    const account = this.getOneAccount(accountNumber);
    if(typeof account !== 'string') {
      this.accounts[this.accounts.indexOf(account)].status = status;
    } else {
      console.log(`no account with number ${accountNumber}`);
    }
  }

}
