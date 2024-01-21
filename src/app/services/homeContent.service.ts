import { Injectable } from "@angular/core"
import { IHeroContent } from "../interfaces"

@Injectable({
  providedIn: 'root'
})
export class HomeContentService {
  protected heroContentList: IHeroContent[] = [
    {
        id: 0,
        title: "Rejoignez le plus grand jardin partagé des Internets",
        subtitle: "Beleaf vous donne les outils pour (enfin) vous occuper correctement de vos petits êtres verts",
    },
    {
        id: 1,
        title: "Accédez à des fiches d'entretien pour tous types de plantes,",
        bullets: [
          {
            id: 0,
            text: "Conseils d'entretien généralistes"
          },
          {
            id: 1,
            text: "Bonnes pratiques"
          },
          {
            id: 2,
            text: "Astuces de la communauté"
          },
        ]
      },
    {
        id: 2,
        title: "Créer vos propres fiches d'entretien personnalisées",
        subtitle: "Parce que les besoins d'une plante varie en fonction de son environnement, adaptez la fréquence d'arrosage, de rempotage, etc. de vos plantes et définissez des alertes pour ne pas oublier"
      },
    {
        id: 3,
        title: "Accédez aux fiches d'entretien de tous les membres de la communauté",
        subtitle: "Echangez et inspirez-vous des pratiques d'amateurs en tous genres"
    },
    {
      id: 4,
      title: "Gustave le ficus fait mauvaise mine ?",
        subtitle: "Publiez vos petits tracas dans le Help Center ou trouvez un précédent post similaire. Chez Beleaf, la santé des plantes, c'est une affaire de famille"
      },
]

  getAllContent(): IHeroContent[] {
  return this.heroContentList
}
    }