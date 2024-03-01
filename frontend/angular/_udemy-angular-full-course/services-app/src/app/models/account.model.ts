export enum AvailableStatusses {
    active = 'active',
    unknown = 'unknown',
    inactive = 'inactive'
};

export type AvailableAccountStatus = `${AvailableStatusses}`;

export interface Account {
    accountNumber: number;
    name: string;
    status: AvailableAccountStatus;
}
