export interface UserAccount {
  name:string
  phone:string
  email:string
  password:string
}


export interface Product {
    id?:number|string,
    name:string,
    type?:string,
    categories?:ProductCategories[]|[]
}

export interface Brand {
    id?:number|string,
    name:string,
    type?:string,
    categories?:BrandCategories[] | []
}

export interface Categories {
    id?:number|string,
    name:string,
    products?:CategoriesProducts[],
    brands?:CategoriesBrands[]
}

export interface ProductCategories {
  bondId: number,
  id: number,
  name: string

}

export interface BrandCategories {
  bondId: number,
  id: number,
  name: string

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
    executions : Array<ShoppingListExecutions>
}

export interface ShoppingListExecutions {
    id  : number|string,
}


export interface ShoppingListItem {

}
