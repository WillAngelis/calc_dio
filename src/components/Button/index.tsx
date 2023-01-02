import { useContext } from 'react';
import { Calculator } from '../../context/Calculator';

export enum ButtonType {
    Numeric = 'NUMERIC',
    Operator = 'OPERATOR',
    Clear = 'CLEAR',
    Other = 'OTHER',
}

interface ButtonsProps {
    type: ButtonType;
    name: string;
    onClick: (type: ButtonType) => void;
}

const getButtonStyle = (type: ButtonType) => {
    switch (type) {
        case ButtonType.Clear:
            return 'text-gray-700 h-14 w-14 hover:text-primary';
        case ButtonType.Operator:
            return 'text-primary h-14 w-14 hover:bg-primary hover:rounded-full hover:border-4 hover:border-[#492020] hover:text-white ';
        case ButtonType.Other:
            return 'text-gray-700 h-14 w-14 hover:bg-[#303030] hover:rounded-full hover:border-4 hover:border-[#212121] hover:text-white';
        default:
            return 'text-white h-14 w-14 hover:bg-[#303030] hover:rounded-full hover:border-4 hover:border-[#212121]';
    }
};
export const Button = ({ name, type }: ButtonsProps) => {
    const {
        setResult,
        setOperator,
        setFirstValue,
        setSecondValue,
        firstValue,
        secondValue,
        isSecondNumber,
        operator,
        setIsSecondNumber,
    } = useContext(Calculator);

    const handleChangeValueInNumbers = () => {
        if (firstValue === undefined) {
            setFirstValue(name);
        } else if (!isSecondNumber) {
            setFirstValue((previousValue) => `${previousValue}${name}`);
        } else if (isSecondNumber && secondValue === undefined) {
            setSecondValue(name);
        } else {
            setSecondValue((previousValue) => `${previousValue}${name}`);
        }
    };

    const handleResult = () => {
        switch (operator) {
            case '+':
                setResult(
                    parseInt(firstValue as string) +
                        parseInt(secondValue as string)
                );
                break;

            case '-':
                setResult(
                    parseInt(firstValue as string) -
                        parseInt(secondValue as string)
                );
                break;
            case '*':
                setResult(
                    parseInt(firstValue as string) *
                        parseInt(secondValue as string)
                );

                break;
            case '/':
                setResult(
                    parseInt(firstValue as string) /
                        parseInt(secondValue as string)
                );

                break;
            default:
                break;
        }
    };

    const handleChange = () => {
        switch (type) {
            case ButtonType.Clear:
                setResult(0);
                setFirstValue(undefined);
                setSecondValue(undefined);
                setOperator(undefined);
                setIsSecondNumber(false);
                break;
            case ButtonType.Operator:
                if (name === '=') return handleResult();
                setIsSecondNumber(true);
                setOperator(name);
                break;
            case ButtonType.Numeric:
                handleChangeValueInNumbers();
                break;

            default:
                break;
        }
    };

    return (
        <button className={getButtonStyle(type)} onClick={handleChange}>
            {name}
        </button>
    );
};
