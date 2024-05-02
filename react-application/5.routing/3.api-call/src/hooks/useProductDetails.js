import allproductsdata from "../components/allproductsdata"


export function useProductDetails(id) {
    return allproductsdata.find((p)=>{
        return p.id===id
    })
}

