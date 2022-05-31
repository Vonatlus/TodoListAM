import { Component, Input } from '@angular/core';
import { Item } from 'src/app/app.component';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})

export class InfoComponent {

  @Input() info: Item[] = [];

  getCompletedItems(): number {
    return this.info.filter((item: { completed: boolean }) => item.completed).length;
  }
}
