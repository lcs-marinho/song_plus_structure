import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectMusicComponent } from './select-music.component';

describe('SelectMusicComponent', () => {
  let component: SelectMusicComponent;
  let fixture: ComponentFixture<SelectMusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectMusicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
