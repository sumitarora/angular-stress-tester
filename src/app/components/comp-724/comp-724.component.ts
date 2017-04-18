import { Component, OnInit } from '@angular/core';
import { Service724Service } from '../../services/service-724.service';

@Component({
  selector: 'app-comp-724',
  templateUrl: './comp-724.component.html',
  styleUrls: ['./comp-724.component.css']
})
export class Comp724Component implements OnInit {

  constructor(private _service: Service724Service) { }

  ngOnInit() {
  }

}
