import {Component, OnInit} from '@angular/core';
import {PokedexService} from '../../../services/pokedex.service';
import {PokemonResponse} from '../../../interfaces/PokemonResponse';

@Component({
  selector: 'app-result-display',
  templateUrl: './result-display.component.html',
  styleUrls: ['./result-display.component.css']
})
export class ResultDisplayComponent implements OnInit {
  currentPokemon: PokemonResponse | undefined;

  constructor(private pokedexService: PokedexService) {
  }

  ngOnInit(): void {
  }

  onNextPokemon() {
  }

  onPreviousPokemon() {
  }

}
