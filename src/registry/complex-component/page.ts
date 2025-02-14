import { Component, inject, resource } from '@angular/core';

import { getPokemonList } from '~/registry/complex-component/services/pokemon.service';
import { PokemonCard } from '~/registry/complex-component/components/pokemon-card';

@Component({
  selector: 'PokemonPage',
  imports: [PokemonCard],
  template: `
  <div class="mx-auto w-full max-w-2xl px-4">
    <div class="grid grid-cols-2 gap-4 py-10 sm:grid-cols-3 md:grid-cols-4">
      @for (pokemon of pokemons.value()?.results; track pokemon.name) {
        <PokemonCard [name]="pokemon.name" />
      }
    </div>
  </div>`
})
export class PokemonPage {
  pokemons = resource({
    loader: ({ abortSignal }) => getPokemonList({ limit: 12, abortSignal }),
  })
}
