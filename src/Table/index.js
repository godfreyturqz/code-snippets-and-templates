import './styles.css'


const index = () => {

    const createTable = () => {
        let table = []

        for (let i = 0; i < 25; i++) {
            let children = []

            for (let j = 0; j < 52; j++) {
                children.push(<td></td>)
            }

            table.push(<tr>{children}</tr>)
        }
        return table
    }

    return (
        <table>
            {createTable()}
        </table>
    )
}

export default index
