import {Component, EventEmitter, IterableDiffers, Input, Output} from '@angular/core';
import {DualListComponent} from 'angular-dual-listbox';
import {Author} from "../../model/author";

@Component({
  selector: 'app-custom-listbox',
  templateUrl: './custom-list-box.component.html',
  styleUrls: ['./custom-list-box.component.css']
})
export class CustomListBoxComponent extends DualListComponent {
  @Input() sourceName: string = '';
  @Input() targetName: string = '';

  @Output() selectChange: EventEmitter<any> = new EventEmitter();

  constructor(differs: IterableDiffers) {
    super(differs);
  }

  moveAll():void {
    console.log("this.available " + this.available.sift);
    for (let i = 0; i < 2; i++) {
      console.log(this.available);
    }
    this.selectAll(this.available);
    this.moveItem(this.available, this.confirmed);
  }

  removeAll():void {
    this.selectAll(this.confirmed);
    this.moveItem(this.confirmed, this.available);
  }

  //Override function in DualListComponent to add custom selectChange event.
  override selectItem(list: Array<any>, item: any):void {
    const pk = list.filter((e: any) => {
      return Object.is(e, item);
    });
    if (pk.length > 0) {
      // Already in list, so deselect.
      for (let i:number = 0, len:number = pk.length; i < len; i += 1) {
        const idx:number = list.indexOf(pk[i]);
        if (idx !== -1) {
          list.splice(idx, 1);
          this.selectChange.emit({key: item._id, selected: false});
        }
      }
    } else {
      list.push(item);
      this.selectChange.emit({key: item._id, selected: true});
    }
  }

  override makeName(item: any, separator?: string): string {
    const name = item.name || '';
    const lname = item.lname || '';
    const sname = item.sname || '';
    const fullName:string = [name, lname, sname].filter(Boolean).join(separator || ' ');
    return fullName;
  }

  protected readonly name = name;
}

