import { TLSInfo, Protocol } from './tls';
interface ValidationInput {
    expirationDays: number;
    approvedProtocols: Protocol[];
    tlsInfo: TLSInfo;
}
interface ValidationResult {
    expired: boolean;
    expiresSoon: boolean;
    protocolNotApproved: boolean;
    errorMessage: string | null;
}
export declare function getDaysBetweenDates(date1: Date, date2: Date): number;
export declare function validate(input: ValidationInput): ValidationResult;
export {};
