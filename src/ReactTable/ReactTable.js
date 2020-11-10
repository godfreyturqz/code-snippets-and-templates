import React, { useMemo } from 'react'
import { useTable } from "react-table";
import { COLUMNS, GROUPED_COLUMNS } from "./COLUMNS";
import MOCK_DATA from "./MOCK_DATA.json";
import "./reactTable.css";

function ReactTable() {

    const columns = useMemo(()=> GROUPED_COLUMNS, [])
    const data = useMemo(()=> MOCK_DATA, [])

    const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable({ columns, data })

    return (
        <table { ...getTableProps() }>
            <thead>
                {
                    headerGroups.map( header => (
                        <tr { ...header.getHeaderGroupProps() }>
                            {header.headers.map( column => (
                                <th {...column.getHeaderProps()}>
                                    {column.render('Header')}
                                </th>
                            ))
                            }
                        </tr>
                    ))
                }
            </thead>
            <tbody { ...getTableBodyProps() }>
                {
                    rows.map(row => {
                        prepareRow(row)
                        return (
                            <tr { ...row.getRowProps() }>
                                {
                                    row.cells.map(cell => (
                                        <td {...cell.getCellProps()}>
                                            {cell.render('Cell')}
                                        </td>
                                    ))
                                }
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default ReactTable
