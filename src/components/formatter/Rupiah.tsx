const rupiahFormatter = (currency: number) => {

    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR"
    }).format(currency)
}

export { rupiahFormatter }