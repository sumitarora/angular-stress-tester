import { Component, OnInit } from '@angular/core';
import { Service484Service } from '../../services/service-484.service';

@Component({
  selector: 'app-comp-484',
  templateUrl: './comp-484.component.html',
  styleUrls: ['./comp-484.component.css']
})
export class Comp484Component implements OnInit {

  constructor(private _service: Service484Service) { }

  ngOnInit() {
  }

}
