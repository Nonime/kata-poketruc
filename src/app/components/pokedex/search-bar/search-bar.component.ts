import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {PokedexService} from '../../../services/pokedex.service';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor(private pokedexService: PokedexService) {
  }

  ngOnInit(): void {
  }

  /**
   * Refresh le pokemon affiché par le display
   * @param form
   */
  onSubmit(form: NgForm) {
    let textSasieDansInput = form.form?.value['pokemon-name'];
    if (textSasieDansInput !== '') {
      this.pokedexService.getPokemonInfos(textSasieDansInput);
    }
  }
}
