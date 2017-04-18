import { Component, OnInit } from '@angular/core';
import { Service890Service } from '../../services/service-890.service';

@Component({
  selector: 'app-comp-890',
  templateUrl: './comp-890.component.html',
  styleUrls: ['./comp-890.component.css']
})
export class Comp890Component implements OnInit {

  constructor(private _service: Service890Service) { }

  ngOnInit() {
  }

}
