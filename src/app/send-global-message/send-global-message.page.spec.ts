import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SendGlobalMessagePage } from './send-global-message.page';

describe('SendGlobalMessagePage', () => {
  let component: SendGlobalMessagePage;
  let fixture: ComponentFixture<SendGlobalMessagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendGlobalMessagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SendGlobalMessagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
