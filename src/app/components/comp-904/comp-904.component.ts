import { Component, OnInit } from '@angular/core';
import { Service904Service } from '../../services/service-904.service';

@Component({
  selector: 'app-comp-904',
  templateUrl: './comp-904.component.html',
  styleUrls: ['./comp-904.component.css']
})
export class Comp904Component implements OnInit {

  constructor(private _service: Service904Service) { }

  ngOnInit() {
  }

}
