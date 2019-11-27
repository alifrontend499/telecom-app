import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StepOnePage } from './step-one.page';

describe('StepOnePage', () => {
  let component: StepOnePage;
  let fixture: ComponentFixture<StepOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepOnePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StepOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
