export interface IUser {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  measueres: IMeasures;
}

export interface IMeasures {
  AE: number;
  TD: number;
  TE: number;
  CP: number;
  ALB: number;
  SB: number;
  CC: number;
  CK: number;
  ALK: number;
  LT: number;
  LM: number;
  LSH: number;
}
