import Log from './Log'

const Logs = ({ logs }) => {
    return (
        <>
            {
                logs.map((i) => (
                    <Log key={i.id} log={i}>
                    </Log> 
                ))
            }
        </>
    )
}

export default Logs