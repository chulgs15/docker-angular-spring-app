import { AppPage } from './app.po';
import {browser, by, element, logging} from 'protractor';

import {ComponentFixture, TestBed} from "@angular/core/testing";
import {AppModule} from "../../src/app/app.module";
import {LoginComponent} from "../../src/app/login/login.component";

describe('login 페이지 테스트', () => {
  let page: AppPage;


  beforeEach( () => {
    page = new AppPage();
  });


  it('로그인 페이지가 보인다.', () => {
    page.navigateTo();

    // id/password Item을 찾는다.
    let elementFinder = element(by.tagName("input"));

    element(by.id("mat-input-0")).sendKeys("comscg");
    element(by.id("mat-input-1")).sendKeys("comscg");

    element(by.tagName("button")).click();

    let currentUrl1 = browser.getCurrentUrl();



    expect(currentUrl1).toEqual("localhost:4200/");

  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
