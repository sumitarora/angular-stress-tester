import { Component, OnInit } from '@angular/core';
import { Service923Service } from '../../services/service-923.service';

@Component({
  selector: 'app-comp-923',
  templateUrl: './comp-923.component.html',
  styleUrls: ['./comp-923.component.css']
})
export class Comp923Component implements OnInit {

  constructor(private _service: Service923Service) { }

  ngOnInit() {
  }

}
