export interface Inputs { 
    label?: {
        className?:string,
        value?:string
    }
    name: string,
    type?: string,
    id?: string,
    className?: string,
    value?: any,
    placeholder?: string,
    readonly?: boolean,
    required?: boolean,
    contentTag?: any
};

export interface FormData {
    data : {
        form: {
            className: string, 
            submitCallback: Function
            id?: string,
        }
        inputs?:Inputs[] 
        select?: {
            options:{
                value: string, 
                label: string, 
                disabled: boolean
            }[]
        }
    },
    comeBackFunction? : Function
}