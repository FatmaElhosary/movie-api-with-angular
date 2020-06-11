import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trendingmovies'
})
export class TrendingmoviesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
