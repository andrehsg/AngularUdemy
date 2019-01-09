import { Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import { Ingredient} from '../../shared/ingredient.model' 
import { ShoppingListService } from '../shopping-list.service';
import { FormsModule, NgForm }   from '@angular/forms';
import { Subscription}   from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

subscription: Subscription;
editedItemIndex: number;
editMode = false;
editedIngredient: Ingredient;
@ViewChild ('f') slForm: NgForm;

  

  constructor(private shopListService: ShoppingListService) { 

  }

  ngOnInit() {

      this.subscription = this.shopListService.startedEditing
      .subscribe (



        (index: number) => {



          this.editedItemIndex = index;
          this.editMode = true;
          this.editedIngredient = this.shopListService.getIngredients(index);
          this.slForm.setValue ({

                  name: this.editedIngredient.name,
                  amount: this.editedIngredient.amount


          })
        }

      );

  }

    ngOnDestroy() {

      this.subscription.unsubscribe();

  }

  onClear () {

    this.slForm.reset();
    this.editMode = false;
  }

  onDeleteItem () {


    this.onClear();
    this.shopListService.deleteIngredient(this.editedItemIndex);

  }

  onAddIngredient (form: NgForm) {



      const value = form.value;
      console.log(value);
      const newIng = new Ingredient(
        value.name, value.amount
      );

      if (this.editMode) {

        console.log("edit mode");
        this.shopListService.updateIngredient(this.editedItemIndex, newIng);
        
      }

      else {
      this.shopListService.addIngredient(newIng);
      }
      this.onClear();
  }

}
