import React from 'react'
import { useLocation } from 'react-router-dom'

const BreadCrumb = () => {
    const location = useLocation()
    const path = location.pathname
    // Split path, filter out empty strings, and join with ' > '
    const breadcrumb = path
        .split('/')
        .filter(Boolean)
        .join(' > ')

    return (
        <div>
            Home{breadcrumb && ' > '}{breadcrumb}
        </div>
    )
}

export default BreadCrumb
