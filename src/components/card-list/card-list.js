import { DivComponent } from "../../common/div-component";
import "./card-list.css";

export class CardList extends DivComponent {
  constructor(appState, state) {
    super();
    this.appState = appState;
    this.state = state;
  }

  render() {
    if (this.state.loading) {
      this.el.innerHTML = `<div class="card-list__loader">Загрузка...</div>`;
      return this.el;
    }
    this.el.classList.add("card-list");
    this.el.innerHTML = `
      <h1 class="">Найдено книг – ${this.state.list.length}</h1>
    `;
    return this.el;
  }
}
