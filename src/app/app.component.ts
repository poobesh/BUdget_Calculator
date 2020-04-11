import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Expense Calculator";
  expense: number = 0;
  expenses: Array<number>;
  income: Array<number>;

  onClear() {}
  onAddAmount(data) {
    let x = Number(data.value);
    this.expense += x;
    if (x > 0) {
      this.income.push(x);
    } else {
      if (x < 0) {
        this.expenses.push(x);
      } else {
        console.log("ERROR");
      }
    }
  }
}
