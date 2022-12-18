// conditionally render a specific status when a prop is passed into the component.
// status prop takes a union of string literals that we define using a pipe, rather than assiging it to ANY string.

interface StatusProps {
    status: 'loading' | 'success' | 'error'
}

const Status = ({
    status
}: StatusProps) => {
    let message = '';

    if (status === 'loading') {
        message = 'Loading...'
    } else if (status === 'success') {
        message = 'Data fetched successfully'
    } else if (status === 'error') {
        message = 'Error fetching data'
    }

    return (
        <div>
            <h2>Status - {message}</h2>
        </div>
    )
}

export default Status;