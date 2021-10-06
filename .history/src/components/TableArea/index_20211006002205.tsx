import * as C from './style';
import { Item } from '../../types/Item'


type Props = {
    list: Item[]
}

export const TableArea = ({list}: Props) => {
    return (
        <C.Table>
            <thead>
                <tr>
                    <C.TableHeadColumn width={100}>Data</C.TableHeadColumn>
                    <C.TableHeadColumn width={130}>Categoria</C.TableHeadColumn>
                    <C.TableHeadColumn>Titulo</C.TableHeadColumn>
                    <C.TableHeadColumn width={150}>Valor</C.TableHeadColumn>
                </tr>
            </thead>
            <body>
                {list.map((item, index)=> (
                    <tr>
                        <td></td>
                        <td></td>
                        <td>{item.title}</td>
                        <td></td>
                    </tr>
                        

                ))}
            </body>
        </C.Table>

    );
}