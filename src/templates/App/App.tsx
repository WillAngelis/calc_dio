import { ButtonsScreen } from '../../components/ButtonsScreen';
import { Container } from '../../components/Container';
import { Header } from '../../components/Header';
import { Screen } from '../../components/Screen';

export const App = () => {
    return (
        <Container>
            <Header />
            <Screen />
            <ButtonsScreen />
        </Container>
    );
};
