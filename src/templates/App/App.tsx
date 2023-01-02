import { useState } from 'react';
import { ButtonsScreen } from '../../components/ButtonsScreen';
import { Container } from '../../components/Container';
import { Header } from '../../components/Header';
import { Screen } from '../../components/Screen';
import { Calculator } from '../../context/Calculator';

export const App = () => {
    const [result, setResult] = useState<number>(0);
    const [operator, setOperator] = useState<undefined | string>();
    const [firstValue, setFirstValue] = useState<undefined | string>();
    const [secondValue, setSecondValue] = useState<undefined | string>();
    const [isSecondNumber, setIsSecondNumber] = useState(false);

    return (
        <Container>
            <Calculator.Provider
                value={{
                    result,
                    setResult,
                    operator,
                    setOperator,
                    firstValue,
                    setFirstValue,
                    secondValue,
                    setSecondValue,
                    isSecondNumber,
                    setIsSecondNumber,
                }}
            >
                <Header />
                <Screen />
                <ButtonsScreen />
            </Calculator.Provider>
        </Container>
    );
};
