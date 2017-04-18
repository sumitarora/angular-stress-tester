import { Component, OnInit } from '@angular/core';
import { Service577Service } from '../../services/service-577.service';

@Component({
  selector: 'app-comp-577',
  templateUrl: './comp-577.component.html',
  styleUrls: ['./comp-577.component.css']
})
export class Comp577Component implements OnInit {

  constructor(private _service: Service577Service) { }

  ngOnInit() {
  }

}
