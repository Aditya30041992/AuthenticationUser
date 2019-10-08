import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseloginComponent } from './firebaselogin.component';

describe('FirebaseloginComponent', () => {
  let component: FirebaseloginComponent;
  let fixture: ComponentFixture<FirebaseloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirebaseloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebaseloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
