import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  count: number;
  classOptions = [
    {
      value: 335,
      label: "Freshman",
    },
    {
      value: 305,
      label: "Sophomore/Junior",
    },
    {
      value: 225,
      label: "Senior",
    },
  ];

  numClassStanding: number; // num of meals based off of your class standing
  selectedClassOptionLabel: string; // To store the selected class standing label
  formSubmitted: boolean;
  swipesUsed: number;

  swipesPerWeek = () => {
    let finalDate = new Date("12/10/2023");
    let startDate = new Date(); // return today's date
    let diff = finalDate.getTime() - startDate.getTime();
    let diffWeeks = diff / (1000 * 60 * 60 * 24 * 7);
    return Math.floor((this.numClassStanding - this.swipesUsed) / diffWeeks);
  };

  calculateExpectedMealsUsed = () => {
    let currDate = new Date();
    let startDate = new Date("08/19/2023");
    let diff = currDate.getTime() - startDate.getTime();
    let elapsedDays = diff / (1000 * 24 * 60 * 60);
    // note: there are 113 days per semester.
    return Math.floor((elapsedDays / 113.0) * this.numClassStanding);
  };

  onSubmit() {
    console.log(this.count)
    const selectedOption = this.classOptions.find(option => option.value === this.numClassStanding);
    this.swipesUsed = selectedOption.value - this.count;
    this.formSubmitted = true;
  }
}
