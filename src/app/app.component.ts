import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class Item {
  constructor(
    public userId: number,
    public id: number,
    public title: string,
    public completed: boolean,
  ) {
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  items: Item[] = [];
  inputControl: FormControl = new FormControl('', Validators.required);

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.httpClient.get<Item[]>('https://jsonplaceholder.typicode.com/todos/').subscribe(
      response => {
        this.items = response.slice(0, 20);
      }
    );
  }

  ErrorStateMatcher: ErrorStateMatcher = {
    isErrorState (inputControl: FormControl): boolean{
      return inputControl.dirty && inputControl.invalid;
    }
  }

  addItem(): void {
    if (this.inputControl.value) {
      this.items.unshift({
        userId: Date.now(),
        id: Date.now(),
        title: this.inputControl.value,
        completed: false,
      });

      this.inputControl.reset();
    }
  }
}
