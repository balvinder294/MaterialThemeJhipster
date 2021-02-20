import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jhi-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent implements OnInit {
  elements: any = [
    { id: 1, first: 'Mark', last: 'Otto', handle: '@mdo' },
    { id: 2, first: 'Jacob', last: 'Thornton', handle: '@fat' },
    { id: 3, first: 'Larry', last: 'the Bird', handle: '@twitter' },
  ];

  headElements = ['ID', 'First', 'Last', 'Handle'];

  constructor() {}

  ngOnInit(): void {}
}
