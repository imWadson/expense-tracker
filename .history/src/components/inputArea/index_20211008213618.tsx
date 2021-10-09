import * as C from './styles';
import { Item } from '../../types/Item'

type Props = {
    onAdd: (item: Item) => void;
}

export const InputArea = ({onAdd}: Props) => {

    const handleAddEvent =() => {
        onAdd();
    }

    return (
        <C.Container>
            <button onClick={handleAddEvent}>Adicionar</button>
        </C.Container>
    );
}