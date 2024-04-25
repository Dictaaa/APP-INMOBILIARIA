import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosModalComponent } from './proyectos-modal.component';

describe('ProyectosModalComponent', () => {
  let component: ProyectosModalComponent;
  let fixture: ComponentFixture<ProyectosModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProyectosModalComponent]
    });
    fixture = TestBed.createComponent(ProyectosModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
