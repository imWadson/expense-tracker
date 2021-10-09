import * as C from './styles';
import { Item } from '../../types/Item';
import { formatDate } from '../../helpers/dataFilter';
import { categories } from '../../data/categories';


type Props = {
    item: Item
}

export const TableItem = ({ item }: Props) => {
    return (
        <C.TableLine>
            <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
            <C.TableColumn>
                <C.Category>
                    {categories[item.category].title}
                </C.Category>
            </C.TableColumn>
            <C.TableColumn>{item.title}</C.TableColumn>
            <C.TableColumn>{item.value}</C.TableColumn>
        </C.TableLine>
    );
}