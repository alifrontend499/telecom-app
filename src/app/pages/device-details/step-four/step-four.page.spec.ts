import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StepFourPage } from './step-four.page';

describe('StepFourPage', () => {
  let component: StepFourPage;
  let fixture: ComponentFixture<StepFourPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepFourPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StepFourPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
