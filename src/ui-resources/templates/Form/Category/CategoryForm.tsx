import { z } from "zod"
import { Categories } from "../../../../config/Interfaces/SystemEntities"
import Form from "../../../components/Resources/Form/Form"
import Checkbox from "../../../components/Resources/Form/Input/Checkbox"
import Input from "../../../components/Resources/Form/Input/Input"
import { useEffect, useState } from "react"
import { findProdutcs } from "../../../../services/Products"
import { findBrands } from "../../../../services/Brands"
import { ApiResponse } from "../../../../config/Interfaces/ApiConection"
import './CategoryForm.css'

const categoryZodObject = z.object({
  id: z.string().optional(),
  name: z.string(),
  brands: z.array(z.string()),
  products: z.array(z.string()),
});

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
  const buttonText = category ? "Editar Categoria" : "Criar Categoria"
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([{id:'', name:'', unit_mensure:'', volume:'', type:''}]);
  const [brands, setBrands] = useState([{id:'', name:''}]);
  
  
  useEffect(()=>{
    const executeFind = async () => {
      setProducts(await handleFind(findProdutcs))
      setBrands(await handleFind(findBrands))

      setLoading(false)
    }
    executeFind();
  },[])
 
  if (loading) {
      return <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '200px',
                    fontSize: '1.2rem',
                    color: '#555'
                  }}>
                    <div style={{
                      border: '6px solid #f3f3f3',
                      borderTop: '6px solid #3498db',
                      borderRadius: '50%',
                      width: '40px',
                      height: '40px',
                      animation: 'spin 1s linear infinite'
                    }} />
                    <p style={{ marginTop: '1rem' }}>Carregando...</p>
                    <style>
                      {`
                        @keyframes spin {
                          0% { transform: rotate(0deg); }
                          100% { transform: rotate(360deg); }
                        }
                      `}
                    </style>
      </div>
    }

  return (
    <>
      <Form className={formClassName} submitCallback={action} zodObject={ categoryZodObject }>
        <Input 
            label={{
                className: "labelName",
                value: "Nome da categoria"
            }}
            name={ "name"}
            type={ "text"}
            placeholder={ "Nome da marca"}
            required={true}
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
                            value={ product.id }
                            name={ 'products' }
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
                            value={ brand.id }
                            name={ 'brands' }
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

export const CategoryUpdateForm:React.FC<Category> = ({ action, category, formClassName="CategoriesForm" }) => {
  const buttonText = category ? "Editar Categoria" : "Criar Categoria"
  
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([{id:'', name:'', unit_mensure:'', volume:'', type:''}]);
  const [brands, setBrands] = useState([{id:'', name:''}]);
  
  useEffect(()=>{
    const executeFind = async () => {
      setProducts(await handleFind(findProdutcs))
      setBrands(await handleFind(findBrands))
      setLoading(false)
    }
    executeFind();
  },[])


  if (loading) {
    return <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '200px',
                  fontSize: '1.2rem',
                  color: '#555'
                }}>
                  <div style={{
                    border: '6px solid #f3f3f3',
                    borderTop: '6px solid #3498db',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    animation: 'spin 1s linear infinite'
                  }} />
                  <p style={{ marginTop: '1rem' }}>Carregando...</p>
                  <style>
                    {`
                      @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                      }
                    `}
                  </style>
    </div>
  }

  return (
    <>
    <Form className={formClassName} submitCallback={action} zodObject={ categoryZodObject }>
         { category && category.id && <Input 
            className={"hiddenElement"}
            name={ "id"}
            type={ "text"}
            readonly={true}
            defaultValue={category.id}
        />}
      <Input 
          label={{
              className: "labelName",
              value: "Nome da categoria"
          }}
          className={ "productName" }
          name={ "name"}
          type={ "text"}
          defaultValue={category?.name}
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
