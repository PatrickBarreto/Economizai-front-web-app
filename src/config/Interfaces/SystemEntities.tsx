export interface UserAccount {

}


export interface Product {
    id?:number|string,
    name:string,
    type?:string,
    volume:string,
    unit_mensure:string,
    productsCategory?:[]
}

export interface Brand {
    id?:number|string,
    name:string,
    type?:string
}

export interface Categories {
    id?:number|string,
    name:string,
    products:Product[],
    brands:Brand[]
}

export interface CategoriesProducts {
    id?:number|string,
    categories_id:string,
    products_id:string
}

export interface CategoriesBrands {
    id?:number|string,
    categories_id:string,
    brands_id:string
}




export interface ShoppingList {
    id?:number|string,
    name : string,
    type : string
}


export interface ShoppingListItem {

}
