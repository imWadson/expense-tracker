import * as C from './styles';
import { Item } from '../../types/Item'
import {} from '../../helpers/dataFilter '


type Props = {
    item: Item
}

export const TableItem = ({ item }: Props) => {
    return (
        <C.TableLine>
            <C.TableColumn>{formDate(item.date)}</C.TableColumn>
            <C.TableColumn>{item.category}</C.TableColumn>
            <C.TableColumn>{item.title}</C.TableColumn>
            <C.TableColumn>{item.value}</C.TableColumn>
        </C.TableLine>
    );
}