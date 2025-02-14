import { Component, input } from '@angular/core';
import { PokemonImagePipe } from '~/registry/complex-component/lib/pokemon-image.pipe';

@Component({
  selector: 'PokemonImage',
  imports: [PokemonImagePipe],
  template: `
    <img [src]="number() | pokemonImage" [alt]="name()" />
  `
})
export class PokemonImage {
  name = input.required<string>();
  number = input.required<number>();
}
