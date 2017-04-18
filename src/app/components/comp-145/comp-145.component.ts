import { Component, OnInit } from '@angular/core';
import { Service145Service } from '../../services/service-145.service';

@Component({
  selector: 'app-comp-145',
  templateUrl: './comp-145.component.html',
  styleUrls: ['./comp-145.component.css']
})
export class Comp145Component implements OnInit {

  constructor(private _service: Service145Service) { }

  ngOnInit() {
  }

}
