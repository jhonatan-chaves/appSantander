import { ComponentFixture, TestBed, async, } from '@angular/core/testing';
import { TelaLoginPage } from './tela-login.page';

describe('TelaLoginPage', () => {
  let component: TelaLoginPage;
  let fixture: ComponentFixture<TelaLoginPage>;

  beforeEach(async(() => { //pode ser um erro qualquer coisa só mudar depois o async no import
    fixture = TestBed.createComponent(TelaLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
