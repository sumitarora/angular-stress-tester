import { Component, OnInit } from '@angular/core';
import { Service580Service } from '../../services/service-580.service';

@Component({
  selector: 'app-comp-580',
  templateUrl: './comp-580.component.html',
  styleUrls: ['./comp-580.component.css']
})
export class Comp580Component implements OnInit {

  constructor(private _service: Service580Service) { }

  ngOnInit() {
  }

}
