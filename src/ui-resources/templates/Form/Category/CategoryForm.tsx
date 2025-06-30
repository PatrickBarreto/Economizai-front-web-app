import { z } from "zod"
import { Categories, Product } from "../../../../config/Interfaces/SystemEntities"
import Form from "../../../components/Resources/Form/Form"
import Checkbox from "../../../components/Resources/Form/Input/Checkbox"
import Input from "../../../components/Resources/Form/Input/Input"
import { useEffect, useState } from "react"
import { findProdutcs } from "../../../../services/Products"
import { findBrands } from "../../../../services/Brands"
import { ApiResponse } from "../../../../config/Interfaces/ApiConection"
import './CategoryForm.css'
import { Loading } from "../../Loading/Loading"

interface Category {
  action: Function,
  category?:Categories,
  formClassName?:string,
}

const handleFind = async (finder:Function) => {
  const returnApi:ApiResponse = await finder();
  if(returnApi.status == 200){
      return returnApi.body;
  }
}

export const CategoryCreateForm:React.FC<Category> = ({ action, category, formClassName="CategoriesForm" }) => {

const categoryZodObject = z.object({
  name: z.string()
});

  const buttonText = category ? "Editar Categoria" : "Criar Categoria"
  const [loading, setLoading] = useState(true)
  
  useEffect(()=>{
    const executeFind = async () => {
      setLoading(false)
    }
    executeFind();
  },[])
 
  if (loading) return <Loading/>

  return (
    <>
      <Form className={formClassName} submitCallback={action} zodObject={ categoryZodObject }>
        <Input 
            label={{
                className: "labelName",
                value: "Nome da categoria"
            }}
            className={ "productName" }
            name={ "name"}
            type={ "text"}
            placeholder={ "Nome da marca"}
            required={true}
        />

        <div id="divButton">
          <Input
              id={"editButtonSubmit"}
              name={"buttonSubmit"}
              type={"submit"}
              value={buttonText}
          />
        </div>
      </Form>
    </>
  )
}

export const CategoryUpdateForm:React.FC<Category> = ({ action, category, formClassName="CategoriesForm" }) => {
    
  const categoryZodObject = z.object({
    id: z.string().optional(),
    name: z.string(),
    brands: z.array(z.string()).default(['']),
    products: z.array(z.string()).default(['']),
  });
  
  const buttonText = category ? "Editar Categoria" : "Criar Categoria"
  
  //Esse loading de dentro poderia ser um contexto?
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [brands, setBrands] = useState<Categories[]>([]);
  const [defaultValues, setDefaultValues] = useState<any>({});

  useEffect(() => {
    const executeFind = async () => {
      const productsResult = await handleFind(findProdutcs)
      const brandsResult = await handleFind(findBrands)

      setProducts(productsResult)
      setBrands(brandsResult)

      if(category){
        const categoryId = category.id?.toString();
        const productIds = category.products?.map((p) => p.products_id?.toString()) || [];
        const brandIds = category.brands?.map((b) => b.brands_id?.toString()) || [];
        setDefaultValues({
          id: categoryId,
          name: category.name ?? '',
          products: productIds.map((String)),
          brands: brandIds.map(String)
        })
      }
      setLoading(false)
  }
    executeFind();
  },[category])

   if(loading) return <Loading/>
  if(defaultValues.id) {
    return (
      <>
      <Form className={formClassName} submitCallback={action} zodObject={ categoryZodObject } defaultValues={defaultValues}>
          { category && category.id && <Input 
            className={"hiddenElement"}
            name={ "id"}
            type={ "text"}
            readonly={true}
        />}
        <Input 
            label={{
                className: "labelName",
                value: "Nome da categoria"
            }}
            className={ "productName" }
            name={ "name"}
            type={ "text"}
        />
  
        <div id={"divCategoryBonds"}>
            <h3> Products </h3>
            <div className={"divContentCategoryBonds"}>
            {
                products && products.map((product, index:any)=>{
                    return (
                        <Checkbox 
                            key={index}
                            label={{
                                className: "labelName",
                                value: product.name
                                }
                            }
                            className= {"productCheckbox"}
                            name={ 'products' }
                            value={product.id}
                        />
                    )
                })
            } 
            </div>      
        </div>
  
        <div id={"divCategoryBonds"}>
            <h3> Marcas </h3>
            <div className={"divContentCategoryBonds"}>
            {
                brands && brands.map((brand, index:any)=>{
                    return (
                        <Checkbox 
                            key={index}
                            label={{
                                className: "labelName",
                                value: brand.name
                                }
                            }
                            className= {"brandCheckbox"}
                            name={ 'brands' }
                            value={brand.id}
                        />
                    )
                })
            }
            </div>
        </div>
  
        <div id="divButton">
          <Input
              id={"editButtonSubmit"}
              name={"buttonSubmit"}
              type={"submit"}
              value={buttonText}
          />
        </div>
  
      </Form>
  
      </>
    )
  }
}
