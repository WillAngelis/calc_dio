import { Button, ButtonType } from '../Button';

const buttons: {
    name: string;
    type: ButtonType;
}[] = [
    {
        name: 'C',
        type: ButtonType.Clear,
    },
    {
        name: '+/-',
        type: ButtonType.Other,
    },
    {
        name: '%',
        type: ButtonType.Other,
    },
    {
        name: '/',
        type: ButtonType.Operator,
    },
    {
        name: '7',
        type: ButtonType.Numeric,
    },
    {
        name: '8',
        type: ButtonType.Numeric,
    },
    {
        name: '9',
        type: ButtonType.Numeric,
    },
    {
        name: '*',
        type: ButtonType.Operator,
    },
    {
        name: '4',
        type: ButtonType.Numeric,
    },
    {
        name: '5',
        type: ButtonType.Numeric,
    },
    {
        name: '6',
        type: ButtonType.Numeric,
    },
    {
        name: '+',
        type: ButtonType.Operator,
    },
    {
        name: '1',
        type: ButtonType.Numeric,
    },
    {
        name: '2',
        type: ButtonType.Numeric,
    },
    {
        name: '3',
        type: ButtonType.Numeric,
    },
    {
        name: '-',
        type: ButtonType.Operator,
    },
    {
        name: '00',
        type: ButtonType.Other,
    },
    {
        name: '0',
        type: ButtonType.Numeric,
    },
    {
        name: '.',
        type: ButtonType.Operator,
    },
    {
        name: '=',
        type: ButtonType.Operator,
    },
];

export const ButtonsScreen = () => {
    return (
        <section className="grid text-base w-80 bg-[#1A1A1A] grid-cols-4 p-6 h-96 rounded-b-3xl">
            {buttons.map((button, name, onClick) => (
                <Button
                    name={button.name}
                    type={button.type}
                    key={name}
                    onClick={() => onClick}
                />
            ))}
        </section>
    );
};
