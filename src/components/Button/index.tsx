export enum ButtonType {
    Numeric = 'NUMERIC',
    Operator = 'OPERATOR',
    Clear = 'CLEAR',
    Other = 'OTHER',
}

interface ButtonsProps {
    type: ButtonType;
    name: string | number;
    onClick: () => void;
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
export const Button = ({ name, type, onClick }: ButtonsProps) => {
    return (
        <button className={getButtonStyle(type)} onClick={onClick}>
            {name}
        </button>
    );
};
