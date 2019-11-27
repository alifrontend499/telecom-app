import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StepTwoPage } from './step-two.page';

describe('StepTwoPage', () => {
  let component: StepTwoPage;
  let fixture: ComponentFixture<StepTwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepTwoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StepTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
