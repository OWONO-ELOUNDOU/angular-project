export interface House {
    ActivityId: number;
    ActivityName: string;
    ActivityPrice: number;
    ActivityDesc: string;
    ImageUrl: string;
    quantity: number;
}

export const houses = [
    {
        ActivityId: 1,
        ActivityName: "Recherche des maisons et terrains auprès des sociétés d’état et sociétés immobilières fiables et agréées.",
        ImageUrlmage: "assets/Images/activity_images/recherche maison.jpeg",
        activityPrice: 200,
        ActivityDesc: ''
    },
    {
        ActivityId: 2,
        ActivityName: "Recherche de terrains et placements fonciers spéculatifs",
        ImageUrlmage: "assets/Images/activity_images/terrains et placemants fonciers.jpeg",
        activityPrice: 150,
        ActivityDesc: ''
    },
    {
        ActivityId: 3,
        ActivityName: "Construction, réhabilitation et innovation immobilière",
        ImageUrlmage: "assets/Images/activity_images/construction immobilière.jpeg",
        activityPrice: 200,
        ActivityDesc: ''
    },
    {
        ActivityId: 4,
        ActivityName: "Recherche des actifs financiers",
        ImageUrlmage: "assets/Images/activity_images/actifs financiers.jpeg",
        activityPrice: 100,
        ActivityDesc: ''
    },
    {
        ActivityId: 5,
        ActivityName: "Domiciliation commerciale des sociétés",
        ImageUrlmage: "assets/Images/activity_images/domiciliation commerciale.jpeg",
        activityPrice: 100,
        ActivityDesc: ''
    }
]