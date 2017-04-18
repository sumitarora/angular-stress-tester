import { Component, OnInit } from '@angular/core';
import { Service278Service } from '../../services/service-278.service';

@Component({
  selector: 'app-comp-278',
  templateUrl: './comp-278.component.html',
  styleUrls: ['./comp-278.component.css']
})
export class Comp278Component implements OnInit {

  constructor(private _service: Service278Service) { }

  ngOnInit() {
  }

}
