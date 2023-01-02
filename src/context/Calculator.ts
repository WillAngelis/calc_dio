import { createContext, Dispatch, SetStateAction } from 'react';

interface CalculatorContextInterface {
    result?: number;
    operator?: string;
    firstValue?: string;
    secondValue?: string;
    setResult: Dispatch<SetStateAction<number>>;
    setOperator: Dispatch<SetStateAction<string | undefined>>;
    setFirstValue: Dispatch<SetStateAction<string | undefined>>;
    setSecondValue: Dispatch<SetStateAction<string | undefined>>;
    isSecondNumber: boolean;
    setIsSecondNumber: Dispatch<SetStateAction<boolean>>;
}

export const Calculator = createContext({} as CalculatorContextInterface);
