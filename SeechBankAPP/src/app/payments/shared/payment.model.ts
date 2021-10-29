export interface IPayment {
  name: string;
  desc?: string;
  date?: string;
  amount: string;
  paid?: IPaid[];
}

export interface IPaid {
  name: string;
  desc?: string;
  date?: string;
  amount: string;
}
