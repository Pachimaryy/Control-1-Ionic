import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Usuario2Page } from './usuario2.page';

describe('Usuario2Page', () => {
  let component: Usuario2Page;
  let fixture: ComponentFixture<Usuario2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Usuario2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
