import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ResultDisplayComponent} from './result-display.component';
import {PokedexService} from '../../../services/pokedex.service';
import {FormsModule} from '@angular/forms';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ResultDisplayComponent', () => {
  let component: ResultDisplayComponent;
  let fixture: ComponentFixture<ResultDisplayComponent>;


  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PokedexService
      ],
      imports: [
        FormsModule,
        HttpClientTestingModule,
      ],
      declarations: [ResultDisplayComponent]
    });
    fixture = TestBed.createComponent(ResultDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
