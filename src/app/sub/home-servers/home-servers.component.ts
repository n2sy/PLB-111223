import { Component } from '@angular/core';

@Component({
  selector: 'app-home-servers',
  templateUrl: './home-servers.component.html',
  styleUrl: './home-servers.component.css'
})
export class HomeServersComponent {
  tabServers = [
    {
      id : 1,
      title : "Emmanuel Server",
      statut : 'online'
    },
    {
      id : 2,
      title : "Dimitri Server",
      statut : 'offline'
    },
    {
      id : 3,
      title : "Selim Server",
      statut : 'online'
    }
  ]
}
