import { SimpleDigimon } from './simple-digimon';

export interface Data {
  content: SimpleDigimon[];
  pageable: {
    currentPage: number | string;
    elementsOnPage: number | string;
    totalElements: number | string;
    totalPages: number | string;
    previousPage: number | string;
    nextPage: string;
  };
}
