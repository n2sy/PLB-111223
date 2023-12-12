import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-servers',
  templateUrl: './manage-servers.component.html',
  styleUrl: './manage-servers.component.css'
})
export class ManageServersComponent {
  listServers = [
    {
      title : "Production Server",
      type : "small",
      date_d : new Date(),
      statut : 'critical'
    },
    {
      title : "Production Test Server",
      type : "small",
      date_d : new Date(),
      statut : 'stable'
    },
    {
      title : "Reasearch Server",
      type : "medium",
      date_d : new Date(),
      statut : 'offline'
    },
    {
      title : "Nidhal Server",
      type : "large",
      date_d : new Date(),
      statut : 'stable'
    }
  ];

  affecterClass(st) {
    return {
      'list-group-item-success' : st == 'stable',
      'list-group-item-danger' :  st == 'critical',
      'list-group-item-warning' :  st == 'offline'
    }
  }

}
