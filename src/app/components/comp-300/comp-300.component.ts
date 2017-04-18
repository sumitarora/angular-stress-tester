import { Component, OnInit } from '@angular/core';
import { Service300Service } from '../../services/service-300.service';

@Component({
  selector: 'app-comp-300',
  templateUrl: './comp-300.component.html',
  styleUrls: ['./comp-300.component.css']
})
export class Comp300Component implements OnInit {

  constructor(private _service: Service300Service) { }

  ngOnInit() {
  }

}
