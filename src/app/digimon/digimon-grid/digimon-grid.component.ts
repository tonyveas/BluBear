import { Component, OnInit } from '@angular/core';
import { SimpleDigimon } from '../simple-digimon';
import { DigimonService } from '../digimon.service';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
@Component({
  selector: 'app-digimon-grid',
  templateUrl: './digimon-grid.component.html',
  styleUrls: ['./digimon-grid.component.scss'],
})
export class DigimonGridComponent implements OnInit {
  digimons: SimpleDigimon[] = [];
  page = 0;
  isLoading = false;
  isModalOpen = false;

  setDefaultImage(event: any) {
    event.target.src = 'assets/img/digimonLogo.png';
  }

  constructor(private digimonService: DigimonService) {}

  ngOnInit() {
    console.log('Executing ngOnInit() method - DigimonGridComponent');
    this.getDigimons(0);
  }

  getDigimons(page: number) {
    this.digimonService.getDigimons(page).subscribe((digimons) => {
      console.log('Data: ', digimons);
      this.digimons = [...this.digimons, ...digimons['content']];
    });
  }

  onIonInfinite(ev: any) {
    this.getDigimons(++this.page);
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 800);
  }

  onCardClick(id: number) {
    this.isLoading = true;
    this.digimonService.getDetail(id).subscribe((digimon) => {
      this.isLoading = false;
      this.isModalOpen = true;
      console.log('Data: ', digimon);
    });
    console.log('Click: ', id);
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}
