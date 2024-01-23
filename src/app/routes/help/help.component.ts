import { Component, OnInit, inject } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { IHelpCenterObservation } from '../../types/interfaces';
import { Apollo } from 'apollo-angular';
import { GET_ALL_HELP_CENTER_OBSERVATIONS } from '../../graphql/queries';
import { ApolloQueryResult } from '@apollo/client';

@Component({
  selector: 'app-help',
  standalone: true,
  templateUrl: './help.component.html',
  styleUrl: './help.component.sass',
  imports: [CardComponent],
})
export class HelpComponent implements OnInit {
  helpCenterObservations!: IHelpCenterObservation[];

  apollo = inject(Apollo);

  ngOnInit(): void {
    this.apollo
      .watchQuery({
        query: GET_ALL_HELP_CENTER_OBSERVATIONS,
      })
      .valueChanges.subscribe(({ data }: ApolloQueryResult<any>) => {
        this.helpCenterObservations = data.getAllHelpCenterObservations;
      });
  }
}
