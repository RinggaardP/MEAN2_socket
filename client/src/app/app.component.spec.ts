/* tslint:disable:no-unused-variable */

import {ComponentFixture, TestBed, async, fakeAsync} from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import {SpyLocation} from '@angular/common/testing';
import {Location} from '@angular/common';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import {AppModule} from './app.module';
var assert = require('assert');
import {Blog} from './blog';

let data;

let location: Location;

describe('Navigation test', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(fakeAsync(() => {
    const injector = TestBed.createComponent(AppComponent)
        .debugElement.injector;
    location = injector.get(Location);
  }));
  it('Should navigate to home', fakeAsync(() => {
    location.go('/');
    expect(location.path()).toEqual('/')
  }));
  it('Should navigate to api', fakeAsync(() => {
    location.go('/blog/get');
    expect(location.path()).toEqual('/blog/get')
  }));
  it('it exists', function(){
    assert.ok(Blog);
  });
});
describe('#find()', function() {
  it('should create an object correctly', function(done) {

    data = new Blog("Name", new Date, "Test message", "test chatroom");
    expect(data.user).toEqual("Name");
    expect(data.msgTxt).toEqual("Test message");
    expect(data.chatroom).toEqual("test chatroom");
    console.log("test"+ data.chatroom);
    done();
  });
});
