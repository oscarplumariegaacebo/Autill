import { Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from '../../../core/services/api.service';
import { SpinnerLoadingComponent } from '../spinner-loading/spinner-loading.component';
import { BudgetService } from '../../../core/services/budget.service';

@Component({
  selector: 'app-delete-item-modal',
  standalone: true,
  imports: [SpinnerLoadingComponent],
  templateUrl: './delete-item-modal.component.html',
  styleUrl: './delete-item-modal.component.css'
})
export class DeleteItemModalComponent {
  type: string = '';
  id!: number;
  apiService = inject(ApiService);
  budgetService = inject(BudgetService);
  loading: boolean = false;

  constructor(public dialogRef: MatDialogRef<DeleteItemModalComponent>) {
  }
  onClose(): void {
    this.dialogRef.close();
  }
  confirm(){
    this.loading = true;

    setTimeout(() => {
      if(this.type.includes('factura')){
        this.apiService.deleteBill(this.id).subscribe();
      }else if(this.type.includes('presupuesto')){
        this.budgetService.deleteBudget(this.id).subscribe();
      }else if(this.type.includes('producto')){
        this.apiService.deleteProduct(this.id).subscribe();
      }else if(this.type.includes('cliente')){
        this.apiService.deleteClient(this.id).subscribe(); 
      }

      window.location.reload();
    }, 2000)

    //this.dialogRef.close('confirm');
  }

}
