import { Calculator } from '../../context/Calculator';
import { useContext } from 'react';

export const Screen = () => {
    const { result, operator, firstValue, secondValue } =
        useContext(Calculator);

    return (
        <section className="flex text-xl justify-center items-center gap-4 w-80 bg-[#151515] p-4 h-52 flex-col">
            <div className="flex justify-center w-full text-gray-400 items-center text-sm font-semibold gap-2 h-4">
                <p>{firstValue}</p>
                <span className="text-primary">{operator}</span>
                <p>{secondValue}</p>
            </div>
            <h2 className="text-white text-4xl font-semibold mb-auto">
                {result}
            </h2>
        </section>
    );
};
