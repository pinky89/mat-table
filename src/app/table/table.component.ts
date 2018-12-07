import { Component, OnInit, ViewChildren, ViewContainerRef, ComponentFactoryResolver, ComponentFactory } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ExpandedrowcontentComponent } from '../expandedrowcontent/expandedrowcontent.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  entryComponents: [
    ExpandedrowcontentComponent
  ]
})
export class TableComponent implements OnInit {
  displayedColumns = ['select', 'position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChildren('tableRow', { read: ViewContainerRef }) rowContainers;
  expandedRow: number;

  constructor(private resolver: ComponentFactoryResolver) { }

  ngOnInit() {
  }
  insertComponent(index: number, element: any) {
    if (this.expandedRow != null) {
      // clear old content
      this.dataSource.data[this.expandedRow].icon = 'keyboard_arrow_right';
      this.rowContainers.toArray()[this.expandedRow].clear();
    }

    if (this.expandedRow === index) {
      this.expandedRow = null;
      element.icon = 'keyboard_arrow_right';
    } else {
      const container = this.rowContainers.toArray()[index];
      const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(ExpandedrowcontentComponent);
      const inlineComponent = container.createComponent(factory);

      inlineComponent.instance.name = element.name + " Pinky";
      this.expandedRow = index;
      element.icon = 'keyboard_arrow_down';
    }
  }
}

export interface Element {
  icon: string,
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: Element[] = [
  { icon: 'keyboard_arrow_right', position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { icon: 'keyboard_arrow_right', position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { icon: 'keyboard_arrow_right', position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { icon: 'keyboard_arrow_right', position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { icon: 'keyboard_arrow_right', position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { icon: 'keyboard_arrow_right', position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { icon: 'keyboard_arrow_right', position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { icon: 'keyboard_arrow_right', position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { icon: 'keyboard_arrow_right', position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { icon: 'keyboard_arrow_right', position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { icon: 'keyboard_arrow_right', position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
  { icon: 'keyboard_arrow_right', position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
  { icon: 'keyboard_arrow_right', position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
  { icon: 'keyboard_arrow_right', position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
  { icon: 'keyboard_arrow_right', position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
  { icon: 'keyboard_arrow_right', position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
  { icon: 'keyboard_arrow_right', position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
  { icon: 'keyboard_arrow_right', position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
  { icon: 'keyboard_arrow_right', position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
  { icon: 'keyboard_arrow_right', position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];
