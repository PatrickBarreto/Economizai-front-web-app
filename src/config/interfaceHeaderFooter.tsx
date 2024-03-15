export default interface headerFooterComponent {
    image: {
        path:string;
        alt:string;
    },
    menu: {
        label: string;
        link: string;
    }[];
}