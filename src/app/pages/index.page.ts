import { Component } from '@angular/core';

import { HelloWorld } from '~/registry/hello-world/hello-world';
import { PokemonPage } from '~/registry/complex-component/page'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HelloWorld, PokemonPage],
  template: `
    <div class="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
      <header class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold tracking-tight">Custom Registry</h1>
        <p class="text-muted-foreground">
          A custom registry for distribution code using shadcn-ng.
        </p>
      </header>
      <main class="flex flex-col flex-1 gap-8">
        <div class="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
          <div class="flex items-center justify-between">
            <h2 class="text-sm text-muted-foreground sm:pl-3">
              A simple hello world component
            </h2>
          </div>
          <div class="flex items-center justify-center min-h-[400px] relative">
            <HelloWorld />
          </div>
        </div>

        <div class="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
          <div class="flex items-center justify-between">
            <h2 class="text-sm text-muted-foreground sm:pl-3">
              A complex component showing services, libs and components.
            </h2>
          </div>
          <div class="flex items-center justify-center min-h-[400px] relative">
            <PokemonPage />
          </div>
        </div>
      </main>
    </div>
  `,
})
export default class HomeComponent { }
