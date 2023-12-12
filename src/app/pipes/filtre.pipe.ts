import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtre',
  pure : false
})
export class FiltrePipe implements PipeTransform {

  transform(value: any[], selectedStatut : string): any[] {
    if(!selectedStatut.length)
      return value;
    else
      return value.filter((serv) => serv['statut'] == selectedStatut)
  }

}
