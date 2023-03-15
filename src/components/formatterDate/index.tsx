const dateFormatter = (date: string, format?: string) => {    
    if(format === null || format === undefined) {
        return new Date(date).toLocaleDateString("Id", {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
        })
    }

    let newDate = new Date(date)

    const getYear = newDate.toLocaleDateString('default', { year: 'numeric' })
    const getMonth = newDate.toLocaleDateString('default', {month: '2-digit'})
    const getDay = newDate.toLocaleDateString('default', { day: '2-digit' })

    const formattedDate = `${getYear}-${getMonth}-${getDay}`

    return formattedDate
}

export { dateFormatter }