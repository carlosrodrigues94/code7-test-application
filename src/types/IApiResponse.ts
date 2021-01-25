import { IDebt } from './IDebt';

export interface IApiResponse {
  success: boolean;
  message: string;
  result: IDebt[];
}
