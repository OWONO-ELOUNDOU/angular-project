export interface Commisariat {
    id : number;
    name : string;
    phone : string;
    agency: [];
}

export const commisariats = [
    {
        id: 1,
        name: "Commissariat Central n°01",
        phone: "222 22 29 32",
        agency: [
            {
                name: "Commissariat du 1er (Centre Administratif)",
                phone: "222 23 26 56"
            },
            {
                name: "Commissariat 2eme (Mokolo)",
                phone: "222 22 60 68"
            },
            {
                name: "Commissariat 3eme (Nkoldongo)",
                phone: "222 23 44 91"
            },
            {
                name: "Commissariat 5eme (Ngoa-Ekellé)",
                phone: "222 22 01 88"
            },
            {
                name: "Commissariat 6eme (Etoudi)",
                phone: "222 21 80 55"
            },
            {
                name: "Commissariat 10eme (Bastos)",
                phone: "222 21 78 03"
            },
            {
                name: "Commissariat 17eme (Messassi)",
                phone: "655 97 62 15"
            },
            {
                name: "Commissariat 18eme (Ngousso)",
                phone: "655 97 62 18"
            }
        ]
    },
    {
        "id": 2,
        "name": "Commissariat Central N°02",
        "phone": "222 22 72 72",
        "agency": [
            {
                "name": "Commissariat 8eme (Mbankolo)",
                "phone": "222 22 62 30"
            },
            {
                "name": "Commissariat 11eme (Cite Verte)",
                "phone": "222 22 62 37"
            },
            {
                "name": "Commissariat 12eme (Nkolbisson)",
                "phone": "222 22 75 83"
            }
        ]
    },
    {
        "id": 3,
        "name": "Commissariat Central N°03",
        "phone": "222 31 52 92",
        "agency": [
            {
                "name": "Commissariat 7eme (Efoulan)",
                "phone": "222 31 52 92"
            },
            {
                "name": "Commissariat 11eme (Cite Verte)",
                "phone": "222 31 85 97"
            },
            {
                "name": "Commissariat 13eme (Melen)",
                "phone": "222 31 41 04"
            },
            {
                "name": "Commissariat 19eme (Ahala)",
                "phone": "655 97 62 21"
            }
        ]
    },
    {
        "id": 3,
        "name": "Commissariat Central N°04",
        "phone": "222 23 13 34",
        "agency": [
            {
                "name": "Commissariat 4eme (Mimboman)",
                "phone": "222 23 13 34"
            },
            {
                "name": "Commissariat 14eme (Ekounou)",
                "phone": "222 30 48 53"
            },
            {
                "name": "Commissariat 13eme (Melen)",
                "phone": "222 30 48 58"
            },
            {
                "name": "Commissariat 16eme (Mimboman Château)",
                "phone": "222 22 50 62"
            },
            {
                "name": "Commissariat 20eme (Biteng Maetur)",
                "phone": "655 97 62 24"
            }
        ]
    }
]

