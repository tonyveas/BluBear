import { Component, OnInit, Input } from '@angular/core';
import { DigimonDetail } from '../digimon-detail';
import { DigimonService } from '../digimon.service';
import { SimpleDigimon } from '../simple-digimon';

@Component({
  selector: 'app-digimon-detail',
  templateUrl: './digimon-detail.component.html',
  styleUrls: ['./digimon-detail.component.scss'],
})
export class DigimonDetailComponent implements OnInit {
  // @Input() digimon_detail!: DigimonDetail;
  @Input() digimon!: SimpleDigimon;
  digimonDetail!: DigimonDetail;
  isLoading = false;
  isModalOpen = false;
  constructor(private digimonService: DigimonService) {}

  ngOnInit() {
    console.log('Executing ngOnInit() method - DigimonDetailComponent');
  }

  onCardClick(id: number) {
    this.isLoading = true;
    this.digimonService.getDetail(id).subscribe((digimonDetail) => {
      this.isLoading = false;
      this.isModalOpen = true;
      this.digimonDetail = digimonDetail;
      console.log('Data: ', digimonDetail);
    });
    console.log('Click: ', id);
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  setDefaultImage(event: any) {
    event.target.src = 'assets/img/digimonLogo.png';
  }

  getStringFromArray(array: any[], property: string) {
    if (array && array.length > 0) {
      return array.map((item) => item[property]).join(' | ');
    }
    return '';
  }

  getLevelsString() {
    return this.getStringFromArray(this.digimonDetail.levels, 'level');
  }

  getAttributesString() {
    return this.getStringFromArray(this.digimonDetail.attributes, 'attribute');
  }

  getTypesString() {
    return this.getStringFromArray(this.digimonDetail.types, 'type');
  }
}
