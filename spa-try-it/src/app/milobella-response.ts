import { ShowCardData } from './cinema/show-card.model';

export class MilobellaResponse {
  constructor(
    public vocal: string,
    public visu: ShowCardData[],
  ) { }
}
