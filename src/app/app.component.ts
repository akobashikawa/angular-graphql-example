import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = {};
  title = 'app';
  query = gql`
  {
  centers {
    id
    name
    services {
      description
      professionals {
        fullName
        availables {
          dates {
            hours
          }
        }
      }
    }
  }
}
  `;
  constructor(apollo: Apollo) {
    apollo.query({query: this.query}).subscribe(res => {
      this.data = res.data;
    });
  }
}
