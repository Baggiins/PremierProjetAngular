import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-choix-campagne-ou-toulouse',
  templateUrl: './choix-campagne-ou-toulouse.component.html',
  styleUrls: ['./choix-campagne-ou-toulouse.component.scss']
})
export class ChoixCampagneOuToulouseComponent implements OnInit {

  pt  = 0;
  intit = '';
  ptToulouse = 0;
  ptCampagne = 0;
  index = 0;
  // tslint:disable-next-line:ban-types
  listIntitCamp: String[];
  // tslint:disable-next-line:ban-types
  listIntitToul: String[];
  constructor() { }

  ngOnInit(): void {
    this.listIntitCamp = [];
    this.listIntitToul = [];
  }

  onSubCamp() {
    this.ptCampagne = Math.floor(this.pt) + Math.floor(this.ptCampagne);
    this.listIntitCamp.push(this.intit + ' pour ce nombre de points : ' + this.pt);
    console.log('Point pour tls : ' + this.ptToulouse);
    console.log('Point pour camp : ' + this.ptCampagne);
  }
  onSubToul() {
    this.ptToulouse = Math.floor(this.pt) + Math.floor(this.ptToulouse);
    this.listIntitToul.push(this.intit + ' pour ce nombre de points : ' + this.pt);
    console.log('Point pour tls : ' + this.ptToulouse);
    console.log('Point pour camp : ' + this.ptCampagne);
  }
  submit() {
    if (this.ptCampagne < this.ptToulouse) {
      alert('On reste à Toulouse caca');
    } else if (this.ptCampagne > this.ptToulouse) {
      alert('On part à la campagne caca');
    } else {
      alert('C\'est une égalité...');
    }
  }
}
