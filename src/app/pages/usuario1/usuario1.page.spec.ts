import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Usuario1Page } from './usuario1.page';

describe('Usuario1Page', () => {
  let component: Usuario1Page;
  let fixture: ComponentFixture<Usuario1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Usuario1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
