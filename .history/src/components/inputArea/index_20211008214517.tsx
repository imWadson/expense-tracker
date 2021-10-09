import { useState } from 'react';
import * as C from './styles';
import { Item } from '../../types/Item'
import { categories } from '../../data/categories'

type Props = {
    onAdd: (item: Item) => void;
}

export const InputArea = ({onAdd}: Props) => {
    const [dataField, setDataField] = useState('');
    const [categoryField, setCategoryField] = useState('');
    const [titleField, setTitleField] = useState('');
    const [valueFIeld, setvalueField] = useState(0);

    let categoryKeys: string[] = Object.keys(categories);


    return (
        <C.Container>
            <button onClick={handleAddEvent}>Adicionar</button>
        </C.Container>
    );
}