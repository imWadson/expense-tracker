import * as C from './syle';

export const TableAra = () => {
    return (
        <C.Table>
            <thead>
                <tr>
                    <C.TableHeadColumn>Data</C.TableHeadColumn>
                    <C.TableHeadColumn>Categoria</C.TableHeadColumn>
                    <C.TableHeadColumn>Titulo</C.TableHeadColumn>
                    <C.TableHeadColumn>Valor</C.TableHeadColumn>
                </tr>
            </thead>
        </C.Table>

    );
}