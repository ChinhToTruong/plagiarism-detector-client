import React, {ReactNode, Suspense } from 'react'


interface Props {
    children: ReactNode
}


const LazyLoader = ({children}: Props) => {
    return <Suspense fallback= {<h3>Loading...</h3>}>{children}</Suspense>
}

export default LazyLoader