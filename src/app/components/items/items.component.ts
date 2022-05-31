import { Component, Input } from '@angular/core';
import { Item } from 'src/app/app.component';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent {

  @Input() item: Item = {
    userId: 1,
    id: 1,
    title: '',
    completed: false,
  };
  @Input() items: Item[] = [];
  @Input() index: number = 1;

  handleCheckbox(id: number) {
    this.items.map((item: { id: number; completed: boolean; }) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
    })
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }
}
