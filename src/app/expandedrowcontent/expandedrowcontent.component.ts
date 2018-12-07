import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-expandedrowcontent',
  templateUrl: './expandedrowcontent.component.html',
  styleUrls: ['./expandedrowcontent.component.css']
})
export class ExpandedrowcontentComponent implements OnInit {
  @Input() name: string;
  constructor() { }

  ngOnInit() {
  }

}
