import React from 'react'

function UrlParsing(props) {

    const urlVariable = props.match.params.id
    const query = new URLSearchParams(props.location.search);

    return (
        <>
            {urlVariable}
            <br/>
            {query.get("name")}
            {query.get("id")}
        </>
    )
}

export default UrlParsing
