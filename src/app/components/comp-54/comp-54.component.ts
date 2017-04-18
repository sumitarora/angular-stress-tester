import { Component, OnInit } from '@angular/core';
import { Service54Service } from '../../services/service-54.service';

@Component({
  selector: 'app-comp-54',
  templateUrl: './comp-54.component.html',
  styleUrls: ['./comp-54.component.css']
})
export class Comp54Component implements OnInit {

  constructor(private _service: Service54Service) { }

  ngOnInit() {
  }

}
