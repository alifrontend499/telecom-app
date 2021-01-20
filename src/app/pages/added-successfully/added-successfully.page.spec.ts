import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddedSuccessfullyPage } from './added-successfully.page';

describe('AddedSuccessfullyPage', () => {
  let component: AddedSuccessfullyPage;
  let fixture: ComponentFixture<AddedSuccessfullyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddedSuccessfullyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddedSuccessfullyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
