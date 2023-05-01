export interface Activity {   
    id: number;
    name: string;
    info: string;
    image: string;
    price: number;
    quantity: number;
    activity: any;
}

export interface ServerResponse {
    count: number;
    products: Activity[];
}

export const activities = [
        {
            Id: 1,
            name: "services auprès des administrations publiques / privées / domestiques",
            info: "Effectuez vos courses, formalités, démarches auprès des administrations publiques et privées  sans vous déplacer",
            image: "../../../assets/Images/icon/users.svg",
            activity: [
                {
                    id: 1,
                    image: "assets/Images/activity_images/recherche ou verification.jpeg",
                    name: "Recherche, vérification ou suivi d’information ou de dossier administratif, professionnel ou privé",
                    price: 20,
                    info: "sur devis",
                    quantity: 1
                },
                {
                    id: 2,
                    image: "assets/Images/activity_images/retrait et depot de document.jpeg",
                    name: "Retrait / dépôt de document auprès de toute administration publique ou privée",
                    price: 4,
                    info: "sur devis",
                    quantity: 1
                },
                {
                    id: 3,
                    image: "assets/Images/activity_images/representation et rendez-vous.jpeg",
                    name: "Représentation administrative, professionnelles et privées diverses(réunion, séminaire, conseil d'administration, etc.)",
                    info: "sur devis",
                    quantity: 1
                },
                {
                    id: 4,
                    image: "assets/Images/activity_images/representation et rendez-vous.jpeg",
                    name: "Accomplissement de toute autre course, acte, mission personnelle ou privée à la demande",
                    info: "sur devis",
                    quantity: 1
                }
            ]
        },
        /*
        {
            Id: 2,
            name: "Services Marchands professionnels / Privés et domestiques",
            info: "Effectuer vos achats professionnels et privés dans plusieurs villes au Cameroun et ailleurs sans vous déplacer",
            image: "../../../assets/Images/icon/shopify.svg",
            activity: [
                {
                    id: 1,
                    image: "assets/Images/activity_images/aliments.jpeg",
                    name: "Achat de produits alimentaires ou autres ",
                    price: 7.50,
                    quantity: 1
                },
                {
                    id: 2,
                    image: "assets/Images/activity_images/achat et expedition de petites courses locales.jpeg",
                    name: "Retrait de produits alimentaires ou autres ",
                    price: 4,
                    quantity: 1
                },
                {
                    id: 3,
                    image: "assets/Images/activity_images/autres formalités.jpeg",
                    name: "Expédition de produits alimentaires ou autres ",
                    price: 4,
                    quantity: 1
                }
            ]
        },
        {
            Id: 3,
            name: "Services Messageries professionnels et privés",
            info: "Expédiez et Revecez vos documents et colis sans plus vous déplacer",
            image: "../../../assets/Images/icon/plus-circle.svg",
            activity: [
                {
                    id: 1,
                    //image: "assets/Images/activity_images/achat et expedition de petites courses locales.jpeg",
                    name: "Dépôt de colis",
                    price: 4,
                },
                {
                    id: 2,
                    name: "Retrait de colis",
                }
            ]
        },
        */
];