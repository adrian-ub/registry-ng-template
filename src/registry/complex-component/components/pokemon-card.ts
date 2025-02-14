import { Component, input, resource } from '@angular/core';

import { UbCardDirective, UbCardContentDirective } from '~/components/ui/card'
import { getPokemon } from '~/registry/complex-component/services/pokemon.service';
import { PokemonImage } from '~/registry/complex-component/components/pokemon-image';

@Component({
  selector: 'PokemonCard',
  imports: [UbCardDirective, UbCardContentDirective, PokemonImage],
  template: `
  @if(pokemonResource.value()) {
    @let pokemon = pokemonResource.value()!;

    <div ubCard>
      <div ubCardContent>
        <div>
          <PokemonImage [name]="pokemon.name" [number]="pokemon.id" />
        </div>
        <div class="text-center font-medium">{{pokemon.name}}</div>
      </div>
    </div>
  }
  `
})
export class PokemonCard {
  name = input.required<string>();

  pokemonResource = resource({
    request: this.name,
    loader: ({ request, abortSignal }) => getPokemon({ name: request, abortSignal }),
  })
}
