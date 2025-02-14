import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonImage'
})
export class PokemonImagePipe implements PipeTransform {
  transform(number: number): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`
  }
}
