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
    const [valueField, setValueField] = useState(0);

    let categoryKeys: string[] = Object.keys(categories);

    const handleAddEvent = () => {
        let errors: string[] = [];

        if(isNaN(new Date(dataField).getTime())) {
            errors.push('Data Invalida!');
        }

        if(!categoryKeys.includes(categoryField)) {
            errors.push('Categoria Inválida');
        }

        if(titleField === '') {
            errors.push('Categoria vázia!');
        }
        
        if (valueField <= 0) {
            errors.push('Valor inválido');

        }

        if (errors.length < 0) {
            alert(errors.join("\n"));
        } else {
            onAdd({
                date: new Date(dataField),
                category: categoryField,
                title: titleField,
                value: valueField,
            });
        }

        const clearFields = () => {
            setDataField('');
            setCategoryField('');
            setTitleField('');
            setValueField(0);
        }
    }
    return (
        <C.Container>
            <C.InputLabel>
                <C.InputTitle>Data</C.InputTitle>
                <C.input type="date" value={dataField} onChange={e => setDataField(e.target.value)} />
            </C.InputLabel>

            <C.InputLabel>
                <C.inputTitle>Categoria</C.inputTitle>
                <C.Select value={categoryField} onChange={e => setCategoryField(e.target.value)}>
                    <>
                    <option></option>
                    {categoryKeys.map((key, index) => (
                        <option key={index}>{categories[key].title}</option>
                    ))}
                    </>
                </C.Select>
                </C.InputLabel>
                <C.InputLabel>
                <C.inputTitle>Titulo</C.inputTitle>
                <C.Input type="text" value={titleField} onChange={e => setTitleField(e.target.value)} />
                </C.InputLabel>

                <C.InputLabel>        
                <C.InputTitle>Valor</C.InputTitle>
                <C.Input type="text" value={valueField} onChange={e => setValueField(parseInt(e.target.value))} />
                </C.InputLabel>
                <C.InputLabel>
                    <C.InputTitle>&nbsp;</C.InputTitle>
                    <C.Button onClick={handleAddEvent}>Adicionar</C.Button>
                </C.InputLabel>
        </C.Container>
    );
}