import { Modal } from "../../ui-resources/templates/Modal/Modal";
import { Title } from "../../ui-resources/components/SubComponents/Title";
import { SubTitle } from "../../ui-resources/components/SubComponents/SubTitle";
import { BrandFormInterfaceProp } from "../../config/Interfaces/Common";
import { BrandsForm as BrandFormTemplate} from "../../ui-resources/templates/Form/BrandsForm";

export const BrandEditForm:React.FC<BrandFormInterfaceProp> = ({ action, brand }) => {
    return (
        <Modal>
            <Title content={"Editar Marca"}/>
            <SubTitle content={"Id:"+brand?.id}/>
            <BrandFormTemplate action={action} brand={brand} />
        </Modal>

    );
}


export const BrandCreateForm:React.FC<BrandFormInterfaceProp> = ({ action }) => {
    return (
        <Modal>
            <Title content={"Criar nova marca"}/>
            <BrandFormTemplate action={action} />
        </Modal>
    );
}