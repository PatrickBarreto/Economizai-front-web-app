import { Title } from "../../ui-resources/components/SubComponents/Title";
import { SubTitle } from "../../ui-resources/components/SubComponents/SubTitle";
import { Product } from "../../config/Interfaces/SystemEntities";
import { createProduct, handleSetSpecificProduct, updateProduct } from "../../services/Products";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductsForm } from "../../ui-resources/templates/Form/Products/ProductsForm";
import { Main as Main} from "../../ui-resources/templates/Structure/Main/Main";
import { PrivateHeader } from "../../ui-resources/templates/Structure/Headers/Headers";

export const ProductEditForm:React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation().pathname.split('/')
  const [ searchProduct, setSearchProduct ] = useState<Product>({
    id:'',
    name:'',
    type:'',
    volume:'',
    unit_mensure:'',
  }); 

  useEffect(()=>{
    const fetchData = async () =>{
      handleSetSpecificProduct(setSearchProduct, location[2]);
    }
    fetchData()
  },[]);

  const handlerUpdateProduct = async (data:any) => {
    debugger
    const result = await updateProduct(data);
    if(result.status == 404){
        return alert("Not found");
    }
    navigate("/products")
  }

  if(!searchProduct){
    navigate("/products")
    return false
  } 

  return (
    <>
      <Main>
        <PrivateHeader/>
        <Title content={"Produtos"}/>
        <SubTitle content={"Edite o produto Id:"+searchProduct.id}/>
        <ProductsForm action={handlerUpdateProduct} product={searchProduct}/>
      </Main>
    </>
  );
}


export const ProductCreateForm:React.FC = () => {
  const navigate = useNavigate()

  const handleCreateProduct = async (data:any) => {
    await createProduct(data)
    navigate("/products")
    return
  }

  return (
    <>
      <Main>
        <PrivateHeader/>
        <Title content={"Produto"}/>
        <SubTitle content={"Crie um novo produto"}/>
        <ProductsForm action={handleCreateProduct}/>
      </Main>
    </>
  );
}