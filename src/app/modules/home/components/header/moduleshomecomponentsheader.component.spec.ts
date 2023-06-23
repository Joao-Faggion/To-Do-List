import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleshomecomponentsheaderComponent } from './moduleshomecomponentsheader.component';

describe('ModuleshomecomponentsheaderComponent', () => {
  let component: ModuleshomecomponentsheaderComponent;
  let fixture: ComponentFixture<ModuleshomecomponentsheaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModuleshomecomponentsheaderComponent]
    });
    fixture = TestBed.createComponent(ModuleshomecomponentsheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
