import { Component, OnInit } from '@angular/core';
import { Service665Service } from '../../services/service-665.service';

@Component({
  selector: 'app-comp-665',
  templateUrl: './comp-665.component.html',
  styleUrls: ['./comp-665.component.css']
})
export class Comp665Component implements OnInit {

  constructor(private _service: Service665Service) { }

  ngOnInit() {
  }

}
