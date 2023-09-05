import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CancelComponent } from './cancel.component';

describe('CancelComponent', () => {
  let component: CancelComponent;
  let fixture: ComponentFixture<CancelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
