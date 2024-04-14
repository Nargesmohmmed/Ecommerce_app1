import { TestBed } from '@angular/core/testing';

import { MyHttInterceptor } from './my-htt.interceptor';

describe('MyHttInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      MyHttInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: MyHttInterceptor = TestBed.inject(MyHttInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
