import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/prestations/shared/model/activity.model';
import { ApiService } from '../shared/service/api.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  card = [
    {
      id: 1,
      name: "Vous avez une course administratives ou privée à effectuer,",
      image: "assets/Images/activity_images/recherche ou verification.jpeg"
    },
    {
      id: 2,
      name: "Vous voulez vérifier, suivre l’évolution d’un document dans une administration publique ou privée,",
      image: "assets/Images/activity_images/suivi et vérification.jpeg"
    },
    {
      id: 3,
      name: "Vous avez des documents à prendre, à déposer, certifier, légaliser ou authentifier,",
      image: "assets/Images/activity_images/retrait et depot de document.jpeg"
    },
    {
      id: 4,
      name: "Vous avez une réunion importante et vous ne pouvez y aller,",
      image: "assets/Images/activity_images/representation et rendez-vous.jpeg"
    },
    {
      id: 5,
      name: "Vous avez divers achats professionnels ou personnels à effectuer, professionnels,",
      image: "assets/Images/activity_images/achat et expedition de petites courses locales.jpeg"
    },
    {
      id: 6,
      name: "Vous avez des partenaires, amis ou famille à récupérer à l’aéroport, aérogare ou autre,",
      image: "assets/Images/activity_images/personne ou passager.jpeg"
    },
    {
      id: 7,
      name: "Vous voulez faire des réservations d’hôtel, de transport, et autre",
      image: "assets/Images/activity_images/rendez-vous.jpeg"
    },
    {
      id: 8,
      name: "vous permet de commander en ligne, la réalisation de vos courses et services professionnels et privé",
      image: "assets/Images/activity_images/guide_a_la_creation_juridique.jpeg"
    },
    {
      id: 9,
      name: "Vous voulez chercher, vérifier, confirmer une information ou un document dans une administration publique ou privée, ",
      image: "assets/Images/activity_images/domiciliation commerciale.jpeg"
    },
  ]

  constructor(private service: ApiService) { }

  ngOnInit(): void {
    
  }

}
