import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandedrowcontentComponent } from './expandedrowcontent.component';

describe('ExpandedrowcontentComponent', () => {
  let component: ExpandedrowcontentComponent;
  let fixture: ComponentFixture<ExpandedrowcontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpandedrowcontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandedrowcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
