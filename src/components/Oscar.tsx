// passing React components as children props using the React.ReactNode type

interface OscarProps {
    children: React.ReactNode
}

const Oscar = ({
    children
}: OscarProps) => {
    return <div>{children}</div>
}

export default Oscar;