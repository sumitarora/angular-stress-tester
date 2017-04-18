import { Component, OnInit } from '@angular/core';
import { Service929Service } from '../../services/service-929.service';

@Component({
  selector: 'app-comp-929',
  templateUrl: './comp-929.component.html',
  styleUrls: ['./comp-929.component.css']
})
export class Comp929Component implements OnInit {

  constructor(private _service: Service929Service) { }

  ngOnInit() {
  }

}
